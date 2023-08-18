let workForm = document.querySelector(".workForm");

workForm.addEventListener("reset", () => {
  let loadedImg = document.getElementById("loaded-img");
  if (loadedImg) {
    loadedImg.remove();
    document.querySelector(".form-photo").style.display = null;
  }
});
