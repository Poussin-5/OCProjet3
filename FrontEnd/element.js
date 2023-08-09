export const createElement = ({ balise, text, classes, id }) => {
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
  return element;
};

export const createImage = ({ src, alt }) => {
  const element = createElement({ balise: "img" });
  element.src = src;
  element.alt = alt;

  return element;
};
