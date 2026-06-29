// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <h3>Contactez-nous</h3>
      <p>Email : contact@locatunisie.tn</p>
      <p>Téléphone : +216 71 000 000</p>
      <p>© 2026 TN LocaTunisie - Tous droits réservés</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#1f2937",
  color: "white",
  textAlign: "center",
  padding: "2rem",
  marginTop: "2rem",
};

export default Footer;
