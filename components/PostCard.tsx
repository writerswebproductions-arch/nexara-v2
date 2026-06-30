import Link from 'next/link';

export default function PostCard({ post }: { post: any }) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'NEWS';
  const author = post._embedded?.author?.[0]?.name;

  const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 120) + '...';
  const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Link
      href={'/blog/' + post.slug}
      style={{ background: '#161616', border: '1px solid #222', borderRadius: '12px', overflow: 'hidden', display: 'block', textDecoration: 'none' }}
    >
      <div style={{ width: '100%', height: '180px', background: '#0d0d0d', overflow: 'hidden' }}>
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: '13px' }}>
            No Image
          </div>
        )}
      </div>

      <div style={{ padding: '24px' }}>
        <span style={{ color: '#e63946', fontWeight: 700, fontSize: '12px', letterSpacing: '2px' }}>
          {category.toUpperCase()}
        </span>
        <h2
          style={{ color: '#fff', fontSize: '20px', fontWeight: 800, marginTop: '8px' }}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p
          style={{ color: '#999', fontSize: '14px', marginTop: '8px' }}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <p style={{ color: '#555', fontSize: '12px' }}>{date}</p>
          {author && <p style={{ color: '#555', fontSize: '12px' }}>{author}</p>}
        </div>
      </div>
    </Link>
  );
}