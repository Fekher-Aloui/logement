import React from 'react';
import LogementCard from '@/components/LogementCard';
import { logementsData } from '@/data/logements';

export default function LogementsPage() {
  // On transforme le tableau de données en un tableau d'éléments React (LogementCard)
  const cards = logementsData.map((item) =>
    React.createElement(LogementCard, { key: item.id, logement: item })
  );

  return React.createElement(
    'div',
    { style: { padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' } },
    React.createElement(
      'h2',
      { style: { fontSize: '2rem', marginBottom: '24px', borderBottom: '2px solid #edf2f7', paddingBottom: '10px' } },
      'Nos Logements disponibles'
    ),
    
    // Grille 3 colonnes (LogementList)
    React.createElement(
      'div',
      {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
        },
      },
      cards
    )
  );
}