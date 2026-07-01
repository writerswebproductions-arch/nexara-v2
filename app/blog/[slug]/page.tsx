import { getPost } from '../../../lib/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import AdUnit from '../../../components/AdUnit';

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, '').trim();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).slice(0, 160);
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function SinglePost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'NEWS';
  const author = post._embedded?.author?.[0]?.name;
  const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
      <Link href="/blog" style={{ color: '#999', fontSize: '14px', textDecoration: 'none' }}>← Back to Blog</Link>

      <span style={{ display: 'block', color: '#e63946', fontWeight: 700, fontSize: '12px', letterSpacing: '2px', marginTop: '24px' }}>
        {category.toUpperCase()}
      </span>

      <h1
        style={{ color: '#fff', fontSize: '36px', fontWeight: 900, marginTop: '12px', lineHeight: 1.3 }}
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <div style={{ display: 'flex', gap: '16px', marginTop: '16px', color: '#555', fontSize: '13px' }}>
        {author && <span>By {author}</span>}
        <span>{date}</span>
      </div>

      {featuredImage && (
        <img
          src={featuredImage}
          alt={post.title.rendered}
          style={{ width: '100%', height: 'auto', borderRadius: '12px', marginTop: '32px' }}
        />
      )}

      {/* In-Article Ad */}
      <AdUnit slot="in-article" />

      <div
        style={{ color: '#ccc', fontSize: '17px', lineHeight: 1.8, marginTop: '32px' }}
        dangerouslySetInnerHTML={{ __html: post.content?.rendered || post.excerpt.rendered }}
      />

      {/* In-Article Ad */}
      <AdUnit slot="in-article" />
    </main>
  );
}