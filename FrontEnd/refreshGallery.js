import { buttonDelete, generateWorksModal } from "./modal.js";
import { generateWorks } from "./works.js";

export async function refreshGallery(gallery) {
  gallery.innerHTML = "";
  const reponse = await fetch("http://localhost:5678/api/works");
  let works = await reponse.json();
  generateWorks(works);
  buttonDelete();
}

export async function refreshModalGallery(modalGallery) {
  modalGallery.innerHTML = "";
  const reponse = await fetch("http://localhost:5678/api/works");
  let works = await reponse.json();
  generateWorksModal(works);
  buttonDelete();
}
