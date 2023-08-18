let workForm = document.querySelector(".workForm");

workForm.addEventListener("reset", () => {
  let loadedImg = document.getElementById("loaded-img");
  if (loadedImg) {
    loadedImg.remove();
    document.querySelector(".form-photo").style.display = null;
  }
  const btnSubmit = document.querySelector(".validate");
  btnSubmit.classList.remove("validate-green");

  const erroClassList = document.querySelectorAll(".error");
  erroClassList.forEach((classError) =>
    classError.classList.remove("error", "error-size")
  );
});
