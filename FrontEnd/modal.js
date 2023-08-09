const reponse = await fetch("http://localhost:5678/api/works");
let works = await reponse.json();

function generateWorksModal(works) {
  for (let work of works) {
    //recupération de l'élément parent du DOM
    const modalGallery = document.querySelector(".modal-gallery");

    //création de la balise du projet
    const elementWork = document.createElement("figure");

    //création des balises
    const divImageWork = document.createElement("div");
    divImageWork.classList.add("image-work");
    const imageWork = document.createElement("img");
    imageWork.src = work.imageUrl;

    const editButton = document.createElement("a");
    editButton.innerText = "editer";

    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    btnDelete.classList.add("btn-delete");
    //on rattache les balises au DOM

    modalGallery.appendChild(elementWork);
    elementWork.appendChild(divImageWork);
    divImageWork.appendChild(imageWork);
    elementWork.appendChild(editButton);
    divImageWork.appendChild(btnDelete);
  }
}
function openModal() {
  const editBtn = document.querySelector(".js-modal");
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
