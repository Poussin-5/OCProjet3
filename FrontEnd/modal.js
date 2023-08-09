import { createElement, createImage } from "./element.js";

const reponse = await fetch("http://localhost:5678/api/works");
let works = await reponse.json();

function generateWorksModal(works) {
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
      html: '<i class="fa-solid fa-trash-can"></i>',
    });
    divImageWork.appendChild(btnDelete);
  }
}

function openModal() {
  const editBtn = document.querySelector(".open-modal");
  editBtn.addEventListener("click", () => {
    const aside = document.querySelector("#modal1");
    aside.style.display = null;
  });
}

function quitModal() {
  const cross = document.querySelector(".cross");
  cross.addEventListener("click", () => {
    const aside = document.querySelector("#modal1");
    aside.style.display = "none";
  });
}

openModal();
quitModal();
generateWorksModal(works);
