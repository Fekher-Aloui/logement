// Assurez-vous que ce fichier est bien dans src/app/contact/page.js
export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 md:p-16">
      <h1 className="text-3xl font-bold text-center mb-12">Contactez-nous</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Colonne Formulaire */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-red-500 outline-none"
            />
            <textarea
              placeholder="Votre message"
              rows="5"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-red-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 py-3 rounded font-bold hover:bg-red-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Colonne Infos */}
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-semibold text-red-400">
            Nos Coordonnées
          </h2>
          <p>
            <strong>Adresse :</strong> Avenue de la Liberté, Tunis
          </p>
          <p>
            <strong>Téléphone :</strong> +216 71 123 456
          </p>
          <p>
            <strong>Email :</strong> contact@locatunisie.tn
          </p>
        </div>
      </div>
    </main>
  );
}
