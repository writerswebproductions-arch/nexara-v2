import { getPosts } from '../../lib/api';
import PostCard from '../../components/PostCard';

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = (q || '').toLowerCase().trim();
  const posts = await getPosts();

  const results = query
    ? posts.filter((post: any) => {
        const title = post.title.rendered.toLowerCase();
        const excerpt = post.excerpt.rendered.toLowerCase();
        return title.includes(query) || excerpt.includes(query);
      })
    : [];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 900, color: '#fff' }}>
        Search Results
      </h1>
      <p style={{ color: '#999', marginTop: '8px' }}>
        {query ? <>Showing results for &ldquo;{query}&rdquo;</> : 'Enter a search term to find stories and opportunities.'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
        {query && results.length === 0 && (
          <p style={{ color: '#555' }}>No results found for &ldquo;{query}&rdquo;.</p>
        )}
        {results.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}