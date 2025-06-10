import React from 'react'
import { PageTransition } from '../components/animations';

export default function Thread() {
  return (
    <PageTransition>
      <div style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f2f5'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          padding: '2rem 3rem',
          minWidth: '320px',
          textAlign: 'center'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '2rem',
            fontWeight: 700,
            color: '#333'
          }}>
            Thread
          </h2>
          <p style={{
            color: '#666',
            marginTop: '1rem'
          }}>
          </p>
        </div>
      </div>
    </PageTransition>
  )
}
