import Link from 'next/link';

export default function PostCard({ post, large = false }: { post: any; large?: boolean }) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'NEWS';
  const author = post._embedded?.author?.[0]?.name;
  const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, large ? 180 : 120) + '...';
  const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const isExternal = Boolean(post.externalUrl);
  const href = isExternal ? post.externalUrl : '/blog/' + post.slug;

  const cardContent = (
    <>
      <div className="post-card-img-wrap" style={{ width: '100%', height: large ? '360px' : '180px', background: '#0d0d0d', overflow: 'hidden' }}>
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            loading="lazy"
            className="post-card-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: '13px' }}>
            No Image
          </div>
        )}
      </div>
      <div style={{ padding: large ? '28px' : '24px' }}>
        <span style={{ color: '#e63946', fontWeight: 700, fontSize: '12px', letterSpacing: '2px' }}>
          {category.toUpperCase()}
        </span>
        <h2
          style={{ color: '#fff', fontSize: large ? '28px' : '20px', fontWeight: 800, marginTop: '8px', lineHeight: 1.3 }}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p
          style={{ color: '#999', fontSize: large ? '15px' : '14px', marginTop: '8px' }}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <p style={{ color: '#555', fontSize: '12px' }}>{date}</p>
          {author && <p style={{ color: '#555', fontSize: '12px' }}>{author}</p>}
        </div>
      </div>
    </>
  );

  const cardStyle = {
    background: '#161616',
    border: '1px solid #222',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'block',
    textDecoration: 'none',
    height: '100%',
  } as const;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="post-card" style={cardStyle}>
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className="post-card" style={cardStyle}>
      {cardContent}
    </Link>
  );
}