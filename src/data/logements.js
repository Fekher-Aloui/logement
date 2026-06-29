export const logementsData = Array.from({ length: 12 }, (v, i) => {
  const imageIds = [
    "photo-1522708323590-d24dbb6b0267", 
    "photo-1512917774080-9991f1c4c750", 
    "photo-1502672260266-1c1ef2d93688", 
    "photo-1560448204-e02f11c3d0e2", 
    "photo-1484154218962-a197022b5858", 
    "photo-1580587771525-78b9dba3b914", 
    "photo-1513694203232-719a280e022f", 
    "photo-1505691938895-1758d7feb511", 
    "photo-1542314831-068cd1dbfeeb", 
    "photo-1564013799919-ab600027ffc6", 
    "photo-1570129477492-45c003edd2be", 
    "photo-1600585154340-be6161a56a0c"
  ];

  const nomsLogements = [
    "Appartement S+2 à La Marsa",
    "Villa de Standing à Hammamet",
    "Studio Moderne au Centre-Ville Tunis",
    "Maison Traditionnelle à Sidi Bou Saïd",
    "Duplex Chic aux Berges du Lac",
    "Villa avec Piscine à Gammarth",
    "Appartement Vue Mer à Sousse",
    "Bungalow de Charme à Djerba",
    "Studio Lumineux à Monastir",
    "Appartement Cosy à Ennasr",
    "Maison de Vacances à Kelibia",
    "Penthouse Luxueux à Bizerte"
  ];

  const descriptionsLogements = [
    "Spacieux appartement à louer à La Marsa.",
    "Superbe villa lumineuse avec jardin privatif près de la plage.",
    "Idéal pour étudiants ou professionnels, proche de toutes commodités.",
    "Logement typique avec une vue imprenable sur le golfe de Tunis.",
    "Splendide duplex sécurisé dans un quartier haut de gamme.",
    "Grande villa tout confort parfaite pour les vacances en famille.",
    "Profitez du coucher de soleil depuis le balcon de cet appartement face à la mer.",
    "Un havre de paix au style djerbien pour un séjour reposant.",
    "Charmant studio meublé et équipé au cœur de la zone touristique.",
    "Appartement moderne situé dans une résidence calme et gardée.",
    "À deux pas de l'une des plus belles plages de Tunisie.",
    "Prestations haut de gamme avec une terrasse panoramique unique."
  ];

  return {
    id: String(i + 1),
    nom: nomsLogements[i],
    image: `https://images.unsplash.com/${imageIds[i]}?w=500&auto=format&fit=crop`,
    description: descriptionsLogements[i],
    prix: i === 0 ? 1200 : 120 + (i * 40),
    categorie: i % 2 === 0 ? "Appartement" : "Villa"
  };
});