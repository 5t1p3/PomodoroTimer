export const getElement = (el) => {
  const element = document.querySelector(el);
  if (element) {
    return element;
  } else {
    throw new Error(`Check your typing at ${el}`);
  }
};
