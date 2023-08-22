import { afficherMessageErreur } from "./validateForm.js";

let workForm = document.querySelector(".workForm");
let spanMessageErreur = document.getElementById("message-erreur");

workForm.addEventListener("reset", () => {
  let loadedImg = document.getElementById("loaded-img");
  if (loadedImg) {
    loadedImg.remove();
    document.querySelector(".form-photo").style.display = null;
  }
  const btnSubmit = document.querySelector(".validate");
  btnSubmit.classList.remove("validate-green");

  const errorClassList = document.querySelectorAll(".error");
  errorClassList.forEach((classError) =>
    classError.classList.remove("error", "error-text")
  );

  afficherMessageErreur("");
});
