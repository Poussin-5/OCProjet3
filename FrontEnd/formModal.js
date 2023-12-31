import { createElement, createImage } from "./element.js";
import { refreshGallery, refreshModalGallery } from "./refreshGallery.js";
import { messageErreurWorkForm } from "./messageErreur.js";

const modalGallery = document.querySelector(".modal-gallery");
const gallery = document.querySelector(".gallery");

let workForm = document.querySelector(".workForm");
let input = document.querySelector("#photo");
let source = input.files[0];

function submitForm() {
  workForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(workForm);

    const reponse = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: formData,
    });
    workForm.reset();
    refreshGallery(gallery);
    refreshModalGallery(modalGallery);
  });
}

function openTypeFile() {
  input.click();
}

function buttonForFile() {
  let button = document.querySelector(".input-photo");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    openTypeFile();
  });
}

function loadImage() {
  input.addEventListener("change", () => {
    try {
      source = input.files[0];

      if (source.size > 4194304) {
        document
          .querySelector(".form-photo")
          .classList.add("error-text", "error");
        input.value = "";
        throw new Error(`la photo est trop volumineuse`);
      }
      const formPhoto = document.querySelector(".form-photo");
      formPhoto.style.display = "none";

      const addPhoto = document.querySelector(".add-photo");

      const divLoadedImg = createElement({
        balise: `div`,
        classes: "form-photo",
        id: "loaded-img",
      });
      addPhoto.appendChild(divLoadedImg);

      const loadedImg = createImage({
        src: ``,
        alt: "photo du projet",
        classes: "loaded-photo",
      });

      getBase64(source).then((data) => {
        loadedImg.src = data;
      });

      divLoadedImg.appendChild(loadedImg);
    } catch (erreur) {
      console.log(erreur);
      messageErreurWorkForm(erreur.message);
    }
  });
}

submitForm();
buttonForFile();
loadImage();

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
