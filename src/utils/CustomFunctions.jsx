export const scrollToDiv = (id) => {
  document
    .getElementById(id)
    .scrollIntoView({ behavior: "smooth", block: "start" });
};

export const scrollDownByValue = (val) => {
  window.scrollBy({ top: val, left: 0, behavior: "smooth" });
};

export const convertVhToPh = (vh) => {
  const oneVhInPx = window.innerHeight / 100;
  return oneVhInPx * vh;
};
