import { createElement } from "./element.js";

let workForm = document.querySelector(".workForm");

function validerPhoto(source) {
  let source = document.getElementById("input-photo").files[0];
  if (!source) throw new Error(`il n'y a pas de photo`);
}

function validerTitle(title) {
  let title = document.querySelector("#title").value;
  if (!title) throw new Error(`il manque un titre`);
}

function validerCategory(category) {
  let category = document.querySelector(["#cat-select"]).value;
  if (!category) throw new Error(`il manque une catégorie`);
}

function afficherMessageErreur(message) {
  let spanMessageErreur = document.getElementById("messageErreur");

  if (!spanMessageErreur) {
    spanMessageErreur = createElement({
      balise: `span`,
      classes: "erreur",
      id: "messageErreur",
    });
    workForm.append(spanMessageErreur);
  }
  spanMessageErreur.innerText = message;
}
