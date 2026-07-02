import { supabase } from './supabase';

function toCardShape(row: any) {
  return {
    id: 'opp-' + row.id,
    slug: row.slug,
    title: { rendered: row.title },
    excerpt: { rendered: row.excerpt || '' },
    date: row.date_added,
    externalUrl: row.source_url,
    _embedded: {
      author: [{ name: row.source_name || 'NEXARA' }],
      'wp:featuredmedia': [{ source_url: '' }],
      'wp:term': [[{ name: row.category }]],
    },
  };
}

export async function getOpportunities(category: string, limit = 24) {
  const { data, error } = await supabase
    .from('opportunities')
    .select('*')
    .eq('category', category)
    .order('date_added', { ascending: false })
    .limit(limit);

  if (error || !data) return [];
  return data.map(toCardShape);
}