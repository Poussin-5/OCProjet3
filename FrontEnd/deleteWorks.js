export const deleteWorks = async function (e) {
  e.preventDefault();
  const target = e.target.getAttribute("id");
  console.log(target);

  const reponse = await fetch(`http://localhost:5678/api/works/${target}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });
};
