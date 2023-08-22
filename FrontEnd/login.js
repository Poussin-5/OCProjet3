import { createElement } from "./element.js";

function afficherAccueil() {
  let pageAccueil = "./index.html";
  location.href = pageAccueil;
}

function messageErreurLogin() {
  let spanMessageErreur = document.getElementById("messageErreur");

  if (!spanMessageErreur) {
    let formConnexion = document.querySelector(".form-connexion");
    spanMessageErreur = createElement({
      balise: `span`,
      id: "messageErreur",
      text: "l'email ou le mot de passe n'est pas correct",
      classes: "error",
    });
    formConnexion.append(spanMessageErreur);
  }
}

function submitLogin() {
  let formConnexion = document.querySelector(".form-connexion");
  formConnexion.addEventListener("submit", async (event) => {
    event.preventDefault();
    let user = {
      email: document.querySelector("[name=email]").value,
      password: document.querySelector("[name=mdp]").value,
    };
    console.log(user);

    const reponse = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    let userJson = await reponse.json();

    let userId = userJson.userId;
    let token = userJson.token;

    if (!userId) {
      messageErreurLogin();
    } else {
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("userId", userId);

      afficherAccueil();
    }
  });
}

submitLogin();
