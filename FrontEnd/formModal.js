function submitForm() {
  let workForm = document.querySelector(".workForm");
  workForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let newWork = {
      title: document.querySelector("[name=title]").value,
      image: document.querySelector("[name=photo]").value,
      category: document.querySelector(["name=category"]).value,
    };

    const reponse = await fetch("http://localhost:5678/api/work", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newWork),
    });
    s;
  });
}
