import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2921/2921226.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold tracking-wider">TN LocaTunisie</h1>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-red-400">
            Accueil
          </Link>
          <Link href="/logements" className="hover:text-red-400">
            Logements
          </Link>
          <Link href="/inscription" className="hover:text-red-400">
            Inscription
          </Link>
          <Link href="/contact" className="hover:text-red-400">
            Contact
          </Link>
          <Link
            href="/connexion"
            className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            Connexion
          </Link>
        </div>
      </nav>
    </header>
  );
}
