"use client"; // <-- C'est cette ligne qui résout votre erreur

import React from "react";

export default function Connexion() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    console.log("Tentative de connexion pour :", email);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            required
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-red-500"
          />
          <button
            type="submit"
            className="mt-4 p-3 bg-red-500 hover:bg-red-600 transition-colors rounded font-bold"
          >
            Se connecter
          </button>
        </form>
      </div>
    </main>
  );
}
