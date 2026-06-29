'use client';
import React from 'react';

export default function DetailsClient({ logement }) {
  const handleReserver = () => {
    alert("Réservation confirmée");
  };

  return React.createElement(
    'div',
    { style: { maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif', border: '1px solid #e2e8f0', borderRadius: '8px' } },
    React.createElement('img', { src: logement.image, alt: logement.nom, style: { width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '6px' } }),
    React.createElement('h1', { style: { fontSize: '2rem', marginTop: '20px' } }, logement.nom),
    React.createElement('p', null, 'Catégorie : ', React.createElement('strong', null, logement.categorie)),
    React.createElement('p', { style: { color: '#e53e3e', fontSize: '1.5rem', fontWeight: 'bold' } }, `${logement.prix} TND / nuit`),
    React.createElement('p', { style: { color: '#718096', marginTop: '15px' } }, logement.description),
    
    React.createElement(
      'button',
      {
        onClick: handleReserver,
        style: {
          marginTop: '30px', width: '100%', padding: '15px', backgroundColor: '#38a169',
          color: 'white', border: 'none', borderRadius: '6px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer'
        }
      },
      'Réserver'
    )
  );
}