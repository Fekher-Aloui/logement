import React from 'react';
import { logementsData } from '@/data/logements';
import DetailsClient from './DetailsClient';

// Cette fonction change dynamiquement le titre de l'onglet du navigateur
export async function generateMetadata({ params }) {
  const { id } = await params;
  const logement = logementsData.find((item) => item.id === id);
  
  return {
    title: logement ? `${logement.nom} | LocaTunisie` : 'Logement introuvable',
  };
}

export default async function DetailsLogementPage({ params }) {
  const { id } = await params;
  const logement = logementsData.find((item) => item.id === id);

  if (!logement) {
    return React.createElement('p', { style: { padding: '40px', fontFamily: 'Arial' } }, 'Logement introuvable.');
  }

  // On renvoie le composant client en lui passant les données du logement
  return React.createElement(DetailsClient, { logement: logement });
}