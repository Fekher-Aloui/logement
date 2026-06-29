// src/app/layout.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Import du footer
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* Ajout du footer ici */}
      </body>
    </html>
  );
}
