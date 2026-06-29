import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return React.createElement(
    'main',
    {
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      },
    },
    React.createElement('h2', { style: { fontSize: '2.5rem', marginBottom: '20px' } }, 'Bienvenue sur LocaTunisie'),
    
    // Conteneur des deux boutons
    React.createElement(
      'div',
      { style: { display: 'flex', gap: '20px' } },
      
      // Bouton 1 -> /logements
      React.createElement(
        Link,
        { href: '/logements' },
        React.createElement(
          'button',
          {
            style: {
              padding: '12px 24px', backgroundColor: '#e53e3e', color: 'white',
              border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
            }
          },
          'Voir les logements'
        )
      ),
      
      // Bouton 2 -> /contact
      React.createElement(
        Link,
        { href: '/contact' },
        React.createElement(
          'button',
          {
            style: {
              padding: '12px 24px', backgroundColor: 'transparent', color: 'white',
              border: '2px solid white', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
            }
          },
          'Contactez-nous'
        )
      )
    )
  );
}