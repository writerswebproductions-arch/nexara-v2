"use client";
import { useState } from 'react';

export default function NewsletterForm() {
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
    <>
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
    </>
  );
}