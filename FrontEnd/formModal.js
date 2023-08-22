import { createElement, createImage } from "./element.js";
import { generateWorksModal } from "./modal.js";
import { generateWorks } from "./works.js";

const modalGallery = document.querySelector(".modal-gallery");
const gallery = document.querySelector(".gallery");

let workForm = document.querySelector(".workForm");
let input = document.querySelector("#photo");
let source = input.files[0];

function submitForm() {
  workForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(workForm);
    console.log(formData);

    const reponse = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: formData,
    });
    workForm.reset();
    modalGallery.innerHTML = "";
    gallery.innerHTML = "";
    const rep = await fetch("http://localhost:5678/api/works");
    let works = await rep.json();
    generateWorksModal(works);
    generateWorks(works);
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
    source = input.files[0];

    if (source.size <= 4194304) {
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
        src: `./assets/images/${source.name}`,
        alt: "photo du projet",
        classes: "loaded-photo",
      });
      divLoadedImg.appendChild(loadedImg);
    } else {
      document
        .querySelector(".form-photo")
        .classList.add("error-size", "error");
      input.value = "";
      console.log(source);
    }
  });
}

submitForm();
buttonForFile();
loadImage();
