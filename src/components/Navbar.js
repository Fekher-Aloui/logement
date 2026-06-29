'use client';

import { useState } from 'react';
import Link from 'next/link'; // Importation du composant de navigation Next.js

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header style={styles.header}>
      <div style={styles.navContainer}>
        {/* Logo - Redirige vers l'accueil */}
        <Link href="/" style={styles.logo}>
          TN LocaTunisie
        </Link>

        {/* Bouton Hamburger */}
        <div 
          className="hamburger-btn" 
          style={styles.hamburger} 
          onClick={toggleMenu}
        >
          {isOpen ? (
            <span style={styles.closeIcon}>✕</span>
          ) : (
            <div style={styles.hamburgerLines}>
              <span style={styles.bar}></span>
              <span style={styles.bar}></span>
              <span style={styles.bar}></span>
            </div>
          )}
        </div>

        {/* Menu de Navigation avec les vrais liens Next.js */}
        <nav 
          className={`nav-menu-links ${isOpen ? 'open' : ''}`}
          style={{
            ...styles.navMenu,
            ...(isOpen ? styles.navMenuOpen : {})
          }}
        >
          <Link href="/" style={styles.navLink} onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          
          <Link href="/logements" style={styles.navLink} onClick={() => setIsOpen(false)}>
            Logements
          </Link>
          
          <Link href="/inscription" style={styles.navLink} onClick={() => setIsOpen(false)}>
            Inscription
          </Link>
          
          <Link href="/contact" style={styles.navLink} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          
          {/* Si vous créez une page de connexion plus tard, changez le href par /connexion */}
          <Link href="#" style={styles.btnConnexion} onClick={() => setIsOpen(false)}>
            Connexion
          </Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#1a2530',
    padding: '15px 20px',
    position: 'relative',
    zIndex: 1000,
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  hamburger: {
    cursor: 'pointer',
    padding: '5px',
  },
  hamburgerLines: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  bar: {
    width: '24px',
    height: '3px',
    backgroundColor: '#ffffff',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  },
  closeIcon: {
    color: '#ffffff',
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: '1',
  },
  navMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navMenuOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: '#1a2530',
    padding: '20px 0',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    gap: '15px',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '5px 10px',
  },
  btnConnexion: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
  },
};