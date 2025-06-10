import React from 'react'
import { PageTransition } from '../components/animations';

export default function Profile() {
  return (
    <PageTransition>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff' // Set to white to match the center
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 700,
            color: '#222',
            textAlign: 'center'
          }}
        >
          Profile
        </h1>
      </div>
    </PageTransition>
  );
}
