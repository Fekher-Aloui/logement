'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Schéma de validation Yup selon les contraintes de l'énoncé (4.jpg)
const schema = yup.object().shape({
  nom: yup.string().min(5, "Le nom doit contenir au moins 5 caractères").required("Le nom est obligatoire"),
  tel: yup.string().matches(/^[0-9]{8}$/, "Le téléphone doit contenir exactement 8 chiffres").required("Le téléphone est obligatoire"),
  password: yup.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").required("Le mot de passe est obligatoire"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], "La confirmation doit être identique au mot de passe")
    .required("La confirmation est obligatoire"),
  acceptation: yup.boolean().oneOf([true], "Vous devez accepter les conditions").required()
});

export default function InscriptionPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { acceptation: false }
  });

  const onSubmit = (data) => {
    console.log("Inscription réussie :", data);
    alert("Inscription validée avec succès !");
    reset();
  };

  return React.createElement(
    'div',
    { style: { maxWidth: '500px', margin: '40px auto', padding: '30px', fontFamily: 'Arial, sans-serif', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f7fafc' } },
    React.createElement('h2', { style: { textAlign: 'center', color: '#2d3748', marginBottom: '20px' } }, 'Formulaire d\'Inscription'),
    
    React.createElement(
      'form',
      { onSubmit: handleSubmit(onSubmit), style: { display: 'flex', flexDirection: 'column', gap: '15px' } },
      
      // Champ Nom
      React.createElement('div', null,
        React.createElement('input', { ...register('nom'), placeholder: 'Nom complet', style: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' } }),
        errors.nom && React.createElement('p', { style: { color: 'red', fontSize: '0.85rem', margin: '5px 0 0 0' } }, errors.nom.message)
      ),

      // Champ Téléphone
      React.createElement('div', null,
        React.createElement('input', { ...register('tel'), placeholder: 'Téléphone (8 chiffres)', style: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' } }),
        errors.tel && React.createElement('p', { style: { color: 'red', fontSize: '0.85rem', margin: '5px 0 0 0' } }, errors.tel.message)
      ),

      // Champ Mot de passe
      React.createElement('div', null,
        React.createElement('input', { ...register('password'), type: 'password', placeholder: 'Mot de passe (min 6 car.)', style: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' } }),
        errors.password && React.createElement('p', { style: { color: 'red', fontSize: '0.85rem', margin: '5px 0 0 0' } }, errors.password.message)
      ),

      // Champ Confirmation
      React.createElement('div', null,
        React.createElement('input', { ...register('confirmPassword'), type: 'password', placeholder: 'Confirmer le mot de passe', style: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' } }),
        errors.confirmPassword && React.createElement('p', { style: { color: 'red', fontSize: '0.85rem', margin: '5px 0 0 0' } }, errors.confirmPassword.message)
      ),

      // Case à cocher Acceptation
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
        React.createElement('input', { ...register('acceptation'), type: 'checkbox', id: 'accept' }),
        React.createElement('label', { htmlFor: 'accept', style: { fontSize: '0.9rem', color: '#4a5568' } }, "J'accepte les conditions d'utilisation")
      ),
      errors.acceptation && React.createElement('p', { style: { color: 'red', fontSize: '0.85rem', margin: '0' } }, errors.acceptation.message),

      // Bouton S'inscrire
      React.createElement(
        'button',
        { type: 'submit', style: { padding: '12px', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' } },
        "S'inscrire"
      )
    )
  );
}