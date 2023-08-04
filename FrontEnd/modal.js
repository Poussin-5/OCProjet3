const reponse = await fetch("http://localhost:5678/api/works");
let works = await reponse.json();

function generateWorksModal(works) {
  for (let i = 0; i < works.length; i++) {
    let figure = works[i];

    //recupération de l'élément parent du DOM
    const modalGallery = document.querySelector(".modal-gallery");

    //création de la balise du projet
    const elementWork = document.createElement("figure");

    //création des balises
    const imageWork = document.createElement("img");
    imageWork.src = figure.imageUrl;

    const editButton = document.createElement("a");
    editButton.innerText = "editer";

    //on rattache les balises au DOM

    modalGallery.appendChild(elementWork);
    elementWork.appendChild(imageWork);
    elementWork.appendChild(editButton);
  }
}
function openModal() {
  const editBtn = document.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    const aside = document.querySelector("#modal1");
    aside.style.display = null;
  });
}

function closeModal() {
  const cross = document.querySelector(".cross");
  cross.addEventListener("click", () => {
    const aside = document.querySelector("#modal1");
    aside.style.display = "none";
  });
}

openModal();
closeModal();
generateWorksModal(works);
