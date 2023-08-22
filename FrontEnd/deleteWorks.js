import { buttonDelete, generateWorksModal } from "./modal.js";
import { generateWorks } from "./works.js";

const modalGallery = document.querySelector(".modal-gallery");
const gallery = document.querySelector(".gallery");

export const deleteWorks = async function (e) {
  const target = e.target.getAttribute("id");

  const reponse = await fetch(`http://localhost:5678/api/works/${target}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });
  modalGallery.innerHTML = "";
  gallery.innerHTML = "";
  const rep = await fetch("http://localhost:5678/api/works");
  let works = await rep.json();
  generateWorksModal(works);
  generateWorks(works);
  buttonDelete();
};
