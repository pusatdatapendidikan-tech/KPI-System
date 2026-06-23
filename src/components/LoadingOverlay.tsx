'use client';
import { useState, useEffect } from 'react';

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Intercept fetch requests sederhana untuk trigger loading
    // (Pada production sebenarnya pakai context/redux untuk state loading)
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    
    window.addEventListener('load', end);
    return () => window.removeEventListener('load', end);
  }, []);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex',
      justifyContent: 'center', alignItems: 'center'
    }}>
      <div className="spinner-border text-light" style={{width: '4rem', height: '4rem'}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}