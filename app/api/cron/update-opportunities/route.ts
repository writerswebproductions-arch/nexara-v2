import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { getSupabaseAdmin } from '../../../../lib/supabase';

const RSS_SOURCES: Record<string, { url: string; name: string }[]> = {
  scholarships: [
    { url: 'https://opportunitydesk.org/category/scholarships/feed/', name: 'Opportunity Desk' },
  ],
  fellowships: [
    { url: 'https://opportunitydesk.org/category/fellowships/feed/', name: 'Opportunity Desk' },
  ],
  competitions: [
    { url: 'https://opportunitydesk.org/category/competitions/feed/', name: 'Opportunity Desk' },
  ],
  'study-abroad': [
    { url: 'https://opportunitydesk.org/category/scholarships/feed/', name: 'Opportunity Desk' },
  ],
  volunteer: [
    { url: 'https://opportunitydesk.org/category/fellowships/feed/', name: 'Opportunity Desk' },
  ],
  internships: [
    { url: 'https://opportunitydesk.org/category/internship-opportunities/feed/', name: 'Opportunity Desk' },
  ],
};

const parser = new Parser();

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80);
}

async function fetchRssCategory(category: string, sources: { url: string; name: string }[]) {
  const rows: any[] = [];
  for (const source of sources) {
    try {
      const feed = await parser.parseURL(source.url);
      for (const item of feed.items.slice(0, 15)) {
        if (!item.link || !item.title) continue;
        rows.push({
          slug: slugify(item.title) + '-' + slugify(source.name),
          title: item.title,
          excerpt: (item.contentSnippet || item.content || '').slice(0, 300),
          category,
          source_url: item.link,
          source_name: source.name,
          deadline: null,
          date_added: item.isoDate || new Date().toISOString(),
        });
      }
    } catch (err) {
      console.error(`Failed to fetch ${source.name} (${category}):`, err);
    }
  }
  return rows;
}

async function fetchJobs() {
  const rows: any[] = [];
  try {
    const res = await fetch('https://remoteok.com/api', {
      headers: { 'User-Agent': 'NEXARA-Bot (contact via writerswebproduction.com)' },
    });
    if (res.ok) {
      const data = await res.json();
      for (const job of data.slice(1, 25)) {
        if (!job.url || !job.position) continue;
        rows.push({
          slug: slugify(job.position) + '-' + slugify(job.company || 'job'),
          title: `${job.position} at ${job.company}`,
          excerpt: (job.description || '').replace(/<[^>]+>/g, '').slice(0, 300),
          category: 'jobs',
          source_url: job.url,
          source_name: 'RemoteOK',
          deadline: null,
          date_added: job.date || new Date().toISOString(),
        });
      }
    }
  } catch (err) {
    console.error('Failed to fetch RemoteOK jobs:', err);
  }
  return rows;
}

async function fetchGrants() {
  const rows: any[] = [];
  try {
    const res = await fetch('https://api.grants.gov/v1/api/search2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows: 20, oppStatuses: 'posted' }),
    });
    if (res.ok) {
      const data = await res.json();
      const hits = data?.data?.oppHits || [];
      for (const opp of hits) {
        const title = opp.title || opp.opportunityTitle;
        const oppId = opp.id || opp.opportunityId || opp.number;
        if (!title || !oppId) continue;
        const detailUrl = `https://www.grants.gov/search-results-detail/${oppId}`;
        rows.push({
          slug: slugify(title) + '-' + slugify(String(oppId)),
          title,
          excerpt: (opp.description || opp.agencyName || '').toString().slice(0, 300),
          category: 'grants',
          source_url: detailUrl,
          source_name: 'Grants.gov',
          deadline: opp.closeDate || null,
          date_added: opp.postDate || new Date().toISOString(),
        });
      }
    } else {
      console.error('Grants.gov API returned status', res.status);
    }
  } catch (err) {
    console.error('Failed to fetch Grants.gov:', err);
  }
  return rows;
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  let allRows: any[] = [];

  for (const [category, sources] of Object.entries(RSS_SOURCES)) {
    const rows = await fetchRssCategory(category, sources);
    allRows = allRows.concat(rows);
  }
  allRows = allRows.concat(await fetchJobs());
  allRows = allRows.concat(await fetchGrants());

  if (allRows.length === 0) {
    return NextResponse.json({ inserted: 0, message: 'No items fetched' });
  }

  const { data, error } = await supabase
    .from('opportunities')
    .upsert(allRows, { onConflict: 'source_url', ignoreDuplicates: true })
    .select();

  if (error) {
    console.error('Supabase upsert error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ inserted: data?.length ?? 0, fetched: allRows.length });
}