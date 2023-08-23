import { refreshGallery, refreshModalGallery } from "./refreshGallery.js";

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
  refreshGallery(gallery);
  refreshModalGallery(modalGallery);
};
