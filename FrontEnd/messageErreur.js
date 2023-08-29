import { createElement } from "./element.js";

let spanMessageErreur = document.getElementById("message-erreur");

export function messageErreurWorkForm(message) {
  let workForm = document.querySelector(".workForm");
  if (!spanMessageErreur) {
    spanMessageErreur = createElement({
      balise: "span",
      classes: "error-text",
      id: "message-erreur",
    });
    workForm.append(spanMessageErreur);
  }
  spanMessageErreur.innerText = message;
}

export function messageErreurLogin() {
  if (!spanMessageErreur) {
    let formConnexion = document.querySelector(".form-connexion");
    spanMessageErreur = createElement({
      balise: `span`,
      id: "messageErreur",
      text: "Erreur dans l’identifiant ou le mot de passe",
      classes: "error",
    });
    formConnexion.append(spanMessageErreur);
  }
}
