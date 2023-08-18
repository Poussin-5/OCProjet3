import { createElement } from "./element.js";

let workForm = document.querySelector(".workForm");
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

let btnValider = document.querySelector(".validate");
let source = document.getElementById("photo").file[0];
let title = document.getElementById("title").value;
let category = document.getElementById("Category").value;

console.log(source, title, category);

/*
function validerInput(input) {
  let champ = document.getElementById(input);
  champ.addEventListener("change", (e) => {
    if (!input.value) throw new Error(`le champ ${input} est vide`);
  });
}

let source = document.getElementById("photo").file[0];
let title = document.getElementById("title").value;
let category = document.getElementById("Category").value;

function validerForm() {
  try {
    validerInput(source);
    validerInput(title);
    validerInput(category);
  } catch (erreur) {
    afficherMessageErreur(erreur.message);
  }
}

workForm.addEventListener("change", (e) => {
  validerForm();
});
*/
/*
function validerPhoto(source) {
  if (!source) throw new Error(`il n'y a pas de photo`);
}


function validerTitle(title) {
  if (!title) throw new Error(`il manque un titre`);
}


function validerCategory(category) {
  if (!category) throw new Error(`il manque une catégorie`);
}
*/
