import React from 'react';
import { PageTransition } from './components/animations';

export default function Home() {
  return (
    <PageTransition>
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)'
        }}
      >
        <h1
          className="text-5xl font-extrabold mb-6"
          style={{
            color: '#2563eb',
            letterSpacing: '2px',
            textShadow: '0 2px 8px rgba(37,99,235,0.08)'
          }}
        >
          Hello Next
        </h1>
        <div
          className="text-xl px-8 py-4 rounded-lg shadow-md bg-white"
          style={{
            color: '#334155',
            fontWeight: 500
          }}
        >
          おはようございます。
        </div>
      </div>
    </PageTransition>
  );
}
