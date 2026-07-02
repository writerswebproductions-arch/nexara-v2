import { getPosts } from '../../lib/api';
import PostCard from '../../components/PostCard';
import AdUnit from '../../components/AdUnit';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with the latest news, stories and updates from NEXARA — covering technology, sports, entertainment, politics and more.',
  openGraph: {
    title: 'Blog | NEXARA',
    description: 'Stay updated with the latest news, stories and updates from NEXARA.',
    type: 'website',
  },
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#fff' }}>Latest <span style={{ color: '#e63946' }}>News</span></h1>
      <p style={{ color: '#999', marginTop: '8px' }}>Stay updated with the latest stories from around the world.</p>

      <AdUnit slot="header-banner" />

      <div className="blog-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '32px', alignItems: 'start' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {posts.length === 0 && <p style={{ color: '#555' }}>No posts yet. Add posts in WordPress to see them here.</p>}
          {posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <aside style={{ position: 'sticky', top: '24px' }}>
          <AdUnit slot="sidebar" />
        </aside>
      </div>
    </main>
  );
}
