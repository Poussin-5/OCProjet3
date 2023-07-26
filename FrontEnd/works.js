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

    //on rattache les balises au dom

    gallery.appendChild(elementWork);
    elementWork.appendChild(imageWork);
    elementWork.appendChild(titleWork);
  }
}
//afficher le contenue de la gallery
genererWorks(works);
