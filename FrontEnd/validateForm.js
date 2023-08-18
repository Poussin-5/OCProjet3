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

let btnSubmit = document.querySelector(".validate");

/*
function getValueInput() {
  let inputPhoto = document.querySelector("#photo").files[0];
  let inputTitle = document.querySelector("#title").value;
  let inputCategory = document.querySelector("#category").value;
  console.log(inputCategory, inputPhoto, inputTitle)

}

*/

workForm.addEventListener("change", () => {
  let inputPhoto = document.querySelector("#photo").files[0];
  let inputTitle = document.querySelector("#title").value;
  let inputCategory = document.querySelector("#category").value;

  if (inputPhoto && inputTitle && inputCategory) {
    btnSubmit.classList.add("validate-green");
  } else {
    btnSubmit.classList.remove("validate-green");
  }
});

btnSubmit.addEventListener("click", () => {
  const inputPhotoValue = document.querySelector("#photo").files[0];
  const inputTitleValue = document.querySelector("#title").value;
  const inputCategoryValue = document.querySelector("#category").value;

  if (!inputPhotoValue) {
    const formPhoto = document.querySelector(".form-photo");
    formPhoto.classList.add("error");
  }

  if (!inputTitleValue) {
    const inputTitle = document.querySelector("#title");
    inputTitle.classList.add("error");
  }

  if (!inputCategoryValue) {
    const inputCategory = document.querySelector("#category");
    inputCategory.classList.add("error");
  }
});
