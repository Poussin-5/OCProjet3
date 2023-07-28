function afficherAccueil() {
  let pageAccueil = "./index.html";
  location.href = pageAccueil;
}

let formConnexion = document.querySelector(".form-connexion");
formConnexion.addEventListener("submit", (event) => {
  event.preventDefault();
  afficherAccueil();
});
