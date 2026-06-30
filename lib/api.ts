const WP_API = 'https://writerswebproduction.com/wp-json/wp/v2';

const dummyPosts = [
  {
    id: 1,
    slug: 'welcome-to-nexara',
    title: { rendered: 'Welcome to NEXARA' },
    excerpt: { rendered: '<p>NEXARA is your new home for breaking news, global opportunities, and stories that matter. Here is a look at what is coming soon.</p>' },
    date: '2026-06-28T10:00:00',
    _embedded: {
      author: [{ name: 'NEXARA Team' }],
      'wp:featuredmedia': [{ source_url: '' }],
      'wp:term': [[{ name: 'News' }]],
    },
  },
  {
    id: 2,
    slug: 'top-5-scholarships-this-month',
    title: { rendered: 'Top 5 Scholarships This Month' },
    excerpt: { rendered: '<p>From fully funded masters programs to undergraduate grants, here are five scholarships you should not miss this month.</p>' },
    date: '2026-06-25T10:00:00',
    _embedded: {
      author: [{ name: 'NEXARA Team' }],
      'wp:featuredmedia': [{ source_url: '' }],
      'wp:term': [[{ name: 'Scholarships' }]],
    },
  },
  {
    id: 3,
    slug: 'how-tech-is-changing-everything',
    title: { rendered: 'How Tech Is Changing Everything' },
    excerpt: { rendered: '<p>A quick look at the technology trends shaping how we live, work, and connect with each other in 2026.</p>' },
    date: '2026-06-20T10:00:00',
    _embedded: {
      author: [{ name: 'NEXARA Team' }],
      'wp:featuredmedia': [{ source_url: '' }],
      'wp:term': [[{ name: 'Technology' }]],
    },
  },
];

export async function getPosts() {
  try {
    const res = await fetch(WP_API + '/posts?_embed&per_page=12', { next: { revalidate: 3600 } });
    if (!res.ok) return dummyPosts;
    const posts = await res.json();
    return posts.length > 0 ? posts : dummyPosts;
  } catch {
    return dummyPosts;
  }
}

export async function getPost(slug: string) {
  try {
    const res = await fetch(WP_API + '/posts?slug=' + slug + '&_embed', { next: { revalidate: 3600 } });
    if (!res.ok) return dummyPosts.find((p) => p.slug === slug) || null;
    const posts = await res.json();
    return posts[0] || dummyPosts.find((p) => p.slug === slug) || null;
  } catch {
    return dummyPosts.find((p) => p.slug === slug) || null;
  }
}