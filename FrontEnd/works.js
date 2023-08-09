import { createElement, createImage } from "./element.js";

// recupération des projets depuis l'API
const reponse = await fetch("http://localhost:5678/api/works");
let works = await reponse.json();

console.log(works);

//création des projets

function generateWorks(works) {
  for (let work of works) {
    //recupération de l'élément parent du DOM
    const gallery = document.querySelector(".gallery");

    const elementWork = createElement({
      balise: `figure`,
    });

    const imageWork = createImage({
      src: work.imageUrl,
      alt: "photo-du-projet",
    });

    const titleWork = createElement({
      balise: `figcaption`,
      text: work.title,
    });

    //on rattache les balises au DOM

    gallery.appendChild(elementWork);
    elementWork.appendChild(imageWork);
    elementWork.appendChild(titleWork);
  }
}
//afficher le contenue de la gallery
generateWorks(works);

//gestion de la partie filtre

//ecoute du click sur les filtres
//filtre tous
const btnTous = document.querySelector(".btn-tous");
btnTous.addEventListener("click", () => {
  document.querySelector(".gallery").innerHTML = "";
  generateWorks(works);
});

//création des filtres
//recupération des catégories depuis l'API
const rep = await fetch("http://localhost:5678/api/categories");
let categories = await rep.json();

//creation des filtres
function generateFilter(categories) {
  for (let category of categories) {
    const filter = document.querySelector(".filter");

    const elementFilter = createElement({
      balise: `button`,
      text: category.name,
      classes: `btn-${category.id}`,
    });

    filter.appendChild(elementFilter);

    //ajout du listener au button pour trier
    const btn = document.querySelector(`.btn-${category.id}`);
    btn.addEventListener("click", () => {
      const worksBtn = works.filter(function (works) {
        return works.categoryId === category.id;
      });
      document.querySelector(".gallery").innerHTML = "";
      generateWorks(worksBtn);
    });
  }
}

//génération des filtres en fonctions des catégories

generateFilter(categories);

let connected = window.localStorage.getItem("userId");

if (connected != null) {
  let log = document.querySelector("#log");
  log.innerText = "logout";
  log.addEventListener("click", () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
  });
  let divAdmin = document.querySelector(".admin");
  divAdmin.style.display = null;
}
