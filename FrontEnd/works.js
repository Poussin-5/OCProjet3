// recupération des projets depuis l'API
const reponse = await fetch("http://localhost:5678/api/works");
let works = await reponse.json();

console.log(works);

//création des projets

function generateWorks(works) {
  for (let i = 0; i < works.length; i++) {
    let figure = works[i];

    //recupération de l'élément parent du DOM
    const gallery = document.querySelector(".gallery");

    //création de la balise du projet
    const elementWork = document.createElement("figure");

    //création des balises
    const imageWork = document.createElement("img");
    imageWork.src = figure.imageUrl;

    const titleWork = document.createElement("figcaption");
    titleWork.innerText = figure.title;

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
    //recup parent DOM
    const filter = document.querySelector(".filter");

    //création de la balise du filtre
    const elementFilter = document.createElement("button");
    elementFilter.innerText = category.name;

    //ratachement des balises au DOM
    filter.appendChild(elementFilter);
    elementFilter.classList.add(`btn-${category.id}`);

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
let log = document.querySelector("#log");

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
