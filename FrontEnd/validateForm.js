import { messageErreurWorkForm } from "./messageErreur.js";

let workForm = document.querySelector(".workForm");

let btnSubmit = document.querySelector(".validate");

workForm.addEventListener("change", () => {
  let inputPhoto = document.querySelector("#photo").files[0];
  let inputTitle = document.querySelector("#title").value;
  let inputCategory = document.querySelector("#category").value;

  if (inputPhoto && inputTitle && inputCategory) {
    btnSubmit.classList.add("validate-green");
    const errorClassList = document.querySelectorAll(".error");
    errorClassList.forEach((classError) =>
      classError.classList.remove("error", "error-text")
    );
    messageErreurWorkForm("");
  } else {
    btnSubmit.classList.remove("validate-green");
  }
});

btnSubmit.addEventListener("click", () => {
  const inputPhotoValue = document.querySelector("#photo").files[0];
  const inputTitleValue = document.querySelector("#title").value;
  const inputCategoryValue = document.querySelector("#category").value;
  try {
    if (!inputPhotoValue) {
      const formPhoto = document.querySelector(".form-photo");
      formPhoto.classList.add("error");
      throw new Error(`il n'y a pas de photo`);
    }

    if (!inputTitleValue) {
      const inputTitle = document.querySelector("#title");
      inputTitle.classList.add("error");
      throw new Error(`il n'y a pas de titre`);
    }

    if (!inputCategoryValue) {
      const inputCategory = document.querySelector("#category");
      inputCategory.classList.add("error");
      throw new Error(`il n'y a pas de catégorie`);
    }
  } catch (erreur) {
    messageErreurWorkForm(erreur.message);
  }
});
