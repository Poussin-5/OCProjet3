import { createElement, createImage } from "./element.js";

const reponse = await fetch("http://localhost:5678/api/works");
let works = await reponse.json();

function generateWorks(works) {
  for (let work of works) {
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

    gallery.appendChild(elementWork);
    elementWork.appendChild(imageWork);
    elementWork.appendChild(titleWork);
  }
}

generateWorks(works);

const btnTous = document.querySelector(".btn-tous");
btnTous.addEventListener("click", () => {
  document.querySelector(".gallery").innerHTML = "";
  generateWorks(works);
});

const rep = await fetch("http://localhost:5678/api/categories");
let categories = await rep.json();

function generateFilter(categories) {
  for (let category of categories) {
    const filter = document.querySelector(".filter");

    const elementFilter = createElement({
      balise: `button`,
      text: category.name,
      classes: `btn-${category.id}`,
    });

    filter.appendChild(elementFilter);

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
generateFilter(categories);

let connected = window.localStorage.getItem("userId");

if (connected != null) {
  let log = document.querySelector("#log");
  log.innerText = "logout";
  log.addEventListener("click", () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
  });

  const baliseAdmin = document.querySelectorAll(".admin-js");
  for (let balise of baliseAdmin) {
    balise.style.display = null;
  }
}
