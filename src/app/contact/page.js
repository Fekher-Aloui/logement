'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Schéma de validation Yup selon les critères de l'image 3.jpg
const schema = yup.object().shape({
  nom: yup.string().min(4, "Le nom doit avoir au moins 4 caractères").required("Requis"),
  email: yup.string().email("Email invalide").required("Requis"),
  telephone: yup.string().required("Requis"),
  message: yup.string().max(30, "Le message ne doit pas dépasser 30 caractères").required("Requis"),
});

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Message envoyé !");
    reset();
  };

  // --- RENDU DU FORMULAIRE EN PUR JS ---
  const Formulaire = React.createElement(
    'form',
    { onSubmit: handleSubmit(onSubmit), style: { display: 'flex', flexDirection: 'column', gap: '15px' } },
    
    // Champ Nom
    React.createElement('div', null,
      React.createElement('input', { ...register('nom'), placeholder: 'Nom', style: { width: '100%', padding: '10px' } }),
      errors.nom && React.createElement('p', { style: { color: 'red', margin: '5px 0 0 0' } }, errors.nom.message)
    ),
    
    // Champ Email
    React.createElement('div', null,
      React.createElement('input', { ...register('email'), placeholder: 'Email', style: { width: '100%', padding: '10px' } }),
      errors.email && React.createElement('p', { style: { color: 'red', margin: '5px 0 0 0' } }, errors.email.message)
    ),
    
    // Champ Téléphone
    React.createElement('div', null,
      React.createElement('input', { ...register('telephone'), placeholder: 'Téléphone', style: { width: '100%', padding: '10px' } }),
      errors.telephone && React.createElement('p', { style: { color: 'red', margin: '5px 0 0 0' } }, errors.telephone.message)
    ),
    
    // Champ Message
    React.createElement('div', null,
      React.createElement('textarea', { ...register('message'), placeholder: 'Message', rows: '4', style: { width: '100%', padding: '10px' } }),
      errors.message && React.createElement('p', { style: { color: 'red', margin: '5px 0 0 0' } }, errors.message.message)
    ),
    
    // Bouton d'envoi
    React.createElement('button', { type: 'submit', style: { padding: '12px', backgroundColor: '#2b6cb0', color: 'white', border: 'none', cursor: 'pointer' } }, 'Envoyer')
  );

  // --- RENDU DES INFOS FICTIVES ---
  const InfosFictives = React.createElement(
    'div',
    { style: { flex: 1, backgroundColor: '#f7fafc', padding: '20px', borderRadius: '8px' } },
    React.createElement('h3', null, 'Nos Coordonnées'),
    React.createElement('p', null, React.createElement('strong', null, 'Adresse : '), 'Avenue de la Liberté, Tunis'),
    React.createElement('p', null, React.createElement('strong', null, 'Téléphone : '), '+216 71 123 456'),
    React.createElement('p', null, React.createElement('strong', null, 'Email : '), 'contact@locatunisie.tn'),
    React.createElement('img', { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400', alt: 'Bureau', style: { width: '100%', marginTop: '10px' } })
  );

  return React.createElement(
    'div',
    { style: { display: 'flex', gap: '40px', padding: '40px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial' } },
    React.createElement('div', { style: { flex: 1 } }, React.createElement('h2', null, 'Contact Form'), Formulaire),
    InfosFictives
  );
}