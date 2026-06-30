import { getPosts } from '../../../lib/api';
import PostCard from '../../../components/PostCard';
import type { Metadata } from 'next';

function formatName(name: string) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params;
  const displayName = formatName(name);

  return {
    title: displayName,
    description: `Browse the latest ${displayName} stories and updates on NEXARA.`,
    openGraph: {
      title: `${displayName} | NEXARA`,
      description: `Browse the latest ${displayName} stories and updates on NEXARA.`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const posts = await getPosts();

  const filtered = posts.filter((post: any) => {
    const cat = post._embedded?.['wp:term']?.[0]?.[0]?.name || '';
    return cat.toLowerCase().replace(/\s+/g, '-') === name.toLowerCase();
  });

  const displayName = formatName(name);

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#fff' }}>
        {displayName} <span style={{ color: '#e63946' }}>News</span>
      </h1>
      <p style={{ color: '#999', marginTop: '8px' }}>Browsing the {displayName} category.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
        {filtered.length === 0 && (
          <p style={{ color: '#555' }}>No posts in this category yet.</p>
        )}
        {filtered.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}