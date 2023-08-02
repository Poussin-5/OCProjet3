function afficherAccueil() {
  let pageAccueil = "./index.html";
  location.href = pageAccueil;
}

function afficherMessageErreur() {
  let spanMessageErreur = document.getElementById("messageErreur");

  if (!spanMessageErreur) {
    let formConnexion = document.querySelector(".form-connexion");
    spanMessageErreur = document.createElement("span");
    spanMessageErreur.id = "messageErreur";
    spanMessageErreur.classList.add("error");
    formConnexion.append(spanMessageErreur);
  }
  spanMessageErreur.innerText = "l'email ou le mot de passe n'est pas correct";
}

function submitLogin() {
  let formConnexion = document.querySelector(".form-connexion");
  formConnexion.addEventListener("submit", async (event) => {
    event.preventDefault();
    let user = {
      email: document.querySelector("[name=email]").value,
      password: document.querySelector("[name=mdp]").value,
    };
    console.log(user);

    const reponse = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    let userJson = await reponse.json();
    console.log(userJson);

    let userId = userJson.userId;
    let token = userJson.token;

    if (userId != null) {
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("userId", userId);

      afficherAccueil();
    } else {
      afficherMessageErreur();
    }
  });
}

submitLogin();
/*
function connexion() {
  let formConnexion = document.querySelector(".form-connexion");
  formConnexion.addEventListener("submit", (event) => {
    event.preventDefault();
    let baliseEmailCo = document.getElementById("emailConnexion");
    let EmailCo = baliseEmailCo.value;

    let baliseMdpCo = document.getElementById("mdpConnexion");
    let mdpCo = baliseMdpCo.value;

    if (EmailCo === "sophie.bluel@test.tld" && mdpCo === "S0phie") {
      afficherAccueil();
    } else {
      //throw new Error(`l'email ou le mot de passe n'est pas correct`);
      afficherMessageErreur();
    }
  });
}


connexion();
*/

/*
function validerMail(emailCo) {
  
  if () {
    throw new Error(`l'e-mail n'est pas valide`);
  }
}
*/

/*
function validerMdp(mdp) {
  let 
  if () {
    throw new Error(`le mot de passe n'est pas valide`);
  }
}

function afficherMessageErreur(message) {
  let spanMessageErreur = document.getElementById("messageErreur");

  if (!spanMessageErreur) {
    let formConnexion = document.querySelector(".form-connexion");
    spanMessageErreur = document.createElement("span");
    spanMessageErreur.id = "messageErreur";
    formConnexion.append(spanMessageErreur);
  }
  spanMessageErreur.innerText = message;
}
*/

/*
 function connexion () {
 let formConnexion = document.querySelector(".form-connexion");
  formConnexion.addEventListener("submit", (event) => {
    event.preventDefault();
    const identification = {
      email: event.target.querySelector("[name=email]").value,
      mdp: event.target.querySelector("[name=mdp]").value,
    };
    const chargeUtile = JSON.stringify(identification);
    fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: chargeUtile,
    });
    afficherAccueil();
  });
}
  */
