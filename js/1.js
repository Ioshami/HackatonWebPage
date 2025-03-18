const galleryContainer = document.querySelector(".gallery-container");
const loading = document.querySelector(".loading");
let s = "";
loading.innerText = "Загружаем фото...";
galleryContainer.before(loading);

let ti = setInterval(() => {
  s += ".";
  if (s.length > 5) s = "";
  loading.innerText = "Загружаем фото" + s;
}, 500);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  clearInterval(ti);
  loading.remove();
  var elem = document.querySelector(".gallery-container");
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".gallery-item",
    // columnWidth: 100
  });
});
