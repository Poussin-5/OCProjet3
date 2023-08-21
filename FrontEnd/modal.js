import { createElement, createImage } from "./element.js";
import { deleteWorks } from "./deleteWorks.js";

const reponse = await fetch("http://localhost:5678/api/works");
let works = await reponse.json();

const generateWorksModal = function (works) {
  for (let work of works) {
    const modalGallery = document.querySelector(".modal-gallery");

    const elementWork = createElement({
      balise: `figure`,
    });
    modalGallery.appendChild(elementWork);

    const divImageWork = createElement({
      balise: `div`,
      classes: `image-work`,
    });
    elementWork.appendChild(divImageWork);

    const imageWork = createImage({
      src: work.imageUrl,
      alt: "photo-du-projet",
    });
    divImageWork.appendChild(imageWork);

    const editButton = createElement({
      balise: `a`,
      text: `editer`,
    });
    elementWork.appendChild(editButton);

    const btnDelete = createElement({
      balise: `button`,
      classes: `btn-delete`,
      id: `${work.id}`,
      type: `button`,
      html: `<i class="fa-solid fa-trash-can" id="${work.id}"></i>`,
    });
    divImageWork.appendChild(btnDelete);
  }
};

generateWorksModal(works);

let modal = null;
let workForm = document.querySelector(".workForm");

const openModal = async function (e) {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  if (target.startsWith("#")) {
    modal = document.querySelector(target);
  } else {
    modal = await loadModal(target);
  }
  modal.style.display = null;
  modal.addEventListener("click", closeModal);
  modal.querySelector(".js-modal-close").addEventListener("click", closeModal);
  modal
    .querySelector(".js-modal-stop")
    .addEventListener("click", stopPropagation);
  modal.querySelector(".send-pict").addEventListener("click", modalPage2);
};

const closeModal = function (e) {
  if (modal === null) return;
  e.preventDefault();
  modal.style.display = "none";
  modal.removeEventListener("click", closeModal);
  modal
    .querySelector(".js-modal-close")
    .removeEventListener("click", closeModal);
  modal
    .querySelector(".js-modal-stop")
    .removeEventListener("click", stopPropagation);
  modal = null;

  workForm.reset();
};

const modalPage2 = function (e) {
  e.preventDefault();
  modal.style.display = "none";
  modal = document.querySelector(".page2");
  modal.style.display = null;
  modal.addEventListener("click", closeModal);
  modal.querySelector(".js-modal-close").addEventListener("click", closeModal);
  modal
    .querySelector(".js-modal-stop")
    .addEventListener("click", stopPropagation);
  modal.querySelector(".js-modal-back").addEventListener("click", backModal);
};

const backModal = function (e) {
  e.preventDefault();
  modal.style.display = "none";
  modal = document.querySelector(".page1");
  modal.style.display = null;
  workForm.reset();
};

const loadModal = async function (url) {
  const target = "#" + url.split("#")[1];
  const existingModal = document.querySelector(target);
  if (existingModal !== null) return existingModal;
  const html = await fetch(url).then((response) => response.text());
  const element = document
    .createRange()
    .createContextualFragment(html)
    .querySelector(target);

  if (element === null)
    throw `l'élement ${target} n'a pas été trouvé dans la page ${url}`;
  document.body.append(element);
  return element;
};

const stopPropagation = function (e) {
  e.stopPropagation();
};

document.querySelectorAll(".js-modal").forEach((a) => {
  a.addEventListener("click", openModal);
});

const rep = await fetch("http://localhost:5678/api/categories");
let categories = await rep.json();

for (let category of categories) {
  const elementOption = createElement({
    balise: `option`,
    text: category.name,
    value: category.id,
  });

  const select = document.querySelector("#category");

  select.appendChild(elementOption);
}

document.querySelectorAll(".btn-delete").forEach((button) => {
  button.addEventListener("click", deleteWorks);
});
