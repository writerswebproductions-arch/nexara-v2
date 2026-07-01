"use client";
import Link from 'next/link';
import { getPosts } from '../lib/api';
import PostCard from '../components/PostCard';
import { useState } from 'react';

async function fetchPosts() {
  return await getPosts();
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  }

  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%)', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ background: '#e63946', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 700, letterSpacing: '2px' }}>YOUR WORLD UPDATED</span>
          <h1 style={{ fontSize: '56px', fontWeight: 900, color: '#fff', marginTop: '20px', lineHeight: 1.1 }}>Stay Ahead With <span style={{ color: '#e63946' }}>NEXARA</span></h1>
          <p style={{ color: '#999', fontSize: '18px', marginTop: '20px', lineHeight: 1.8 }}>Breaking news, global opportunities, and stories that matter — all in one place.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href='/blog' style={{ background: '#e63946', color: '#fff', padding: '14px 32px', borderRadius: '6px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Read Latest News</Link>
            <Link href='/opportunities' style={{ background: 'transparent', color: '#fff', padding: '14px 32px', borderRadius: '6px', fontWeight: 700, fontSize: '16px', border: '1px solid #444', textDecoration: 'none' }}>Find Opportunities</Link>
          </div>
        </div>
      </section>

      <FeaturedPosts />

      <section style={{ padding: '0 20px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '32px' }}>Browse By Category</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {[['News', '/category/news', '#e63946'], ['Sports', '/category/sports', '#f4a261'], ['Entertainment', '/category/entertainment', '#a8dadc'], ['Politics', '/category/politics', '#457b9d'], ['Technology', '/category/technology', '#2a9d8f']].map(([name, href, color]) => (
            <Link key={name} href={href} style={{ background: '#161616', border: '1px solid #222', borderRadius: '8px', padding: '24px', textAlign: 'center', color: color as string, fontWeight: 700, fontSize: '16px', display: 'block', textDecoration: 'none' }}>{name}</Link>
          ))}
        </div>
      </section>

      <section style={{ background: '#0d0d0d', padding: '60px 20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#fff' }}>Never Miss an Update</h2>
          <p style={{ color: '#999', marginTop: '12px', fontSize: '16px' }}>Get the latest news and opportunities delivered straight to your inbox.</p>
          <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              required
              style={{ flex: 1, minWidth: '240px', background: '#161616', border: '1px solid #333', borderRadius: '6px', padding: '14px 16px', color: '#fff', fontSize: '16px', outline: 'none' }}
            />
            <button
              type='submit'
              disabled={status === 'sending'}
              style={{ background: '#e63946', color: '#fff', padding: '14px 24px', borderRadius: '6px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              {status === 'sending' ? 'Subscribing...' : 'Subscribe Free'}
            </button>
          </form>
          {status === 'success' && <p style={{ color: '#4caf50', fontSize: '14px', marginTop: '12px' }}>✅ You're subscribed! Welcome to NEXARA.</p>}
          {status === 'error' && <p style={{ color: '#e63946', fontSize: '14px', marginTop: '12px' }}>❌ Something went wrong. Please try again.</p>}
          <p style={{ color: '#555', fontSize: '12px', marginTop: '12px' }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <section style={{ padding: '40px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: '#161616', border: '1px solid #222', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#fff' }}>Discover Opportunities</h2>
          <p style={{ color: '#999', marginTop: '12px', fontSize: '16px' }}>Scholarships, grants, fellowships, jobs and more — updated daily.</p>
          <Link href='/opportunities' style={{ display: 'inline-block', marginTop: '24px', background: '#e63946', color: '#fff', padding: '14px 32px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none' }}>Explore Opportunities</Link>
        </div>
      </section>
    </main>
  );
}

async function FeaturedPosts() {
  const posts = await getPosts();
  const featured = posts.slice(0, 3);
  return (
    <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>Latest Stories</h2>
        <Link href='/blog' style={{ color: '#e63946', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>View All →</Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {featured.length === 0 && <p style={{ color: '#555' }}>No posts yet.</p>}
        {featured.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}