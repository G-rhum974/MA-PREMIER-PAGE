function direBonjour() {
  const champ = document.getElementById("prenom");
  const prenom = champ.value.trim();
  const message = document.getElementById("message");

  // Ajoute le texte
  message.textContent = prenom ? "Bonjour " + prenom + " !" : "Bonjour invité !";

  // Réinitialise l'animation
  message.style.animation = "none";
  message.offsetHeight; // "Trick" pour forcer le navigateur à relancer l'animation
  message.style.animation = "fadeIn 0.5s ease forwards";
}


  if (prenom) {
    message.textContent = "Bonjour " + prenom + " !";
  } else {
    message.textContent = "Bonjour invité !";
  }

 

//fonction pour changer la couleur de fond de la page
function changerCouleur() {
  const couleurs = ["#f4f4f4", "#ffe4e1", "#e0ffff", "#d8bfd8", "#fafad2"]; //tableau de couleurs
  const index = Math.floor(Math.random()* couleurs.length); //choisit un nombre au hasard
  document.body.style.backgroundColor = couleurs[index]; // modifie la couleur de fond de la page
}
