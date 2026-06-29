import React from 'react';
import Link from 'next/link';

export default function LogementCard({ logement }) {
  return React.createElement(
    'div',
    {
      style: {
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      },
    },
    // 1. L'image du logement
    React.createElement('img', {
      src: logement.image,
      alt: logement.nom,
      style: { width: '100%', height: '200px', objectFit: 'cover' },
    }),
    
    // 2. Le conteneur des textes et du bouton
    React.createElement(
      'div',
      { style: { padding: '16px', fontFamily: 'Arial, sans-serif' } },
      
      // Le titre (Nom du logement)
      React.createElement(
        'h3',
        { style: { margin: '0 0 8px 0', fontSize: '1.2rem', color: '#2d3748' } },
        logement.nom
      ),
      
      // La catégorie
      React.createElement(
        'p',
        { style: { margin: '0 0 12px 0', color: '#718096', fontSize: '0.9rem' } },
        logement.categorie
      ),
      
      // Le prix
      React.createElement(
        'p',
        { style: { margin: '0 0 16px 0', fontWeight: 'bold', color: '#e53e3e' } },
        `${logement.prix} TND / nuit`
      ),
      
      // Le lien Next.js qui entoure le bouton
      React.createElement(
        Link,
        { href: `/logements/${logement.id}` },
        React.createElement(
          'button',
          {
            style: {
              width: '100%',
              padding: '10px',
              backgroundColor: '#3182ce',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            },
          },
          'Voir les détails'
        )
      )
    )
  );
}