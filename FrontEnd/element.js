export const createElement = ({ balise, text, classes, id, html, value }) => {
  const element = document.createElement(balise);
  if (text) {
    element.innerText = text;
  }

  if (id) {
    element.id = id;
  }

  if (classes) {
    element.classList.add(classes);
  }

  if (html) {
    element.innerHTML = html;
  }

  if (value) {
    element.value = value;
  }
  return element;
};

export const createImage = ({ src, alt, classes }) => {
  const element = createElement({ balise: "img" });
  element.src = src;
  element.alt = alt;

  if (classes) {
    element.classList.add(classes);
  }

  return element;
};
