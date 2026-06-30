import Link from 'next/link';
import { getPosts } from '../../lib/api';
import PostCard from '../../components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opportunities',
  description: 'Discover scholarships, grants, fellowships, internships, jobs and more — updated daily on NEXARA.',
  openGraph: {
    title: 'Opportunities | NEXARA',
    description: 'Discover scholarships, grants, fellowships, internships, jobs and more — updated daily on NEXARA.',
    type: 'website',
  },
};

const categories: [string, string, string][] = [
  ['Scholarships', '/category/scholarships', '#e63946'],
  ['Fellowships', '/category/fellowships', '#f4a261'],
  ['Grants', '/category/grants', '#a8dadc'],
  ['Internships', '/category/internships', '#457b9d'],
  ['Jobs', '/category/jobs', '#2a9d8f'],
  ['Competitions', '/category/competitions', '#e9c46a'],
  ['Study Abroad', '/category/study-abroad', '#e76f51'],
  ['Volunteer', '/category/volunteer', '#90be6d'],
  ['Creative Writing', '/category/creative-writing', '#577590'],
  ['Auditions', '/category/auditions', '#f3722c'],
];

export default async function Opportunities() {
  const posts = await getPosts();
  const opportunityCategoryNames = categories.map((c) => c[0].toLowerCase());
  const featured = posts.filter((post: any) => {
    const cat = (post._embedded?.['wp:term']?.[0]?.[0]?.name || '').toLowerCase();
    return opportunityCategoryNames.includes(cat);
  });

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#fff' }}>
        Global <span style={{ color: '#e63946' }}>Opportunities</span>
      </h1>
      <p style={{ color: '#999', marginTop: '8px' }}>
        Scholarships, grants, fellowships, jobs and more — updated daily.
      </p>

      <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginTop: '48px', marginBottom: '24px' }}>
        Browse By Type
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
        {categories.map(([name, href, color]) => (
          <Link
            key={name}
            href={href}
            style={{ background: '#161616', border: '1px solid #222', borderRadius: '8px', padding: '20px', textAlign: 'center', color, fontWeight: 700, fontSize: '15px', display: 'block', textDecoration: 'none' }}
          >
            {name}
          </Link>
        ))}
      </div>

      <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginTop: '56px', marginBottom: '24px' }}>
        Featured Opportunities
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {featured.length === 0 && (
          <p style={{ color: '#555' }}>No opportunities posted yet. Check back soon.</p>
        )}
        {featured.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}