// recupération des projets depuis l'API
const reponse = await fetch("http://localhost:5678/api/works/");
let works = await reponse.json();

console.log(works);

//création des projets

function genererWorks(works) {
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
genererWorks(works);

//gestion de la partie filtre
//recupération des catégories depuis l'API
const rep = await fetch("http://localhost:5678/api/categories");
let categories = await rep.json();

//ecoute du click sur les filtres
//filtre tous
const btnTous = document.querySelector(".btn-tous");
btnTous.addEventListener("click", () => {
  document.querySelector(".gallery").innerHTML = "";
  genererWorks(works);
});

//filtre objets
const btnObjets = document.querySelector(".btn-objets");
btnObjets.addEventListener("click", () => {
  const worksObjets = works.filter(function (works) {
    return works.categoryId === 1;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererWorks(worksObjets);
});

//filtre Appartements
const btnAppart = document.querySelector(".btn-appart");
btnAppart.addEventListener("click", () => {
  const worksAppart = works.filter(function (works) {
    return works.categoryId === 2;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererWorks(worksAppart);
});

//filtre Hôtel & Restaurant
const btnHotelResto = document.querySelector(".btn-hotel-resto");
btnHotelResto.addEventListener("click", () => {
  const worksHotelResto = works.filter(function (works) {
    return works.categoryId === 3;
  });
  document.querySelector(".gallery").innerHTML = "";
  genererWorks(worksHotelResto);
});
