import { galleryItems } from "./gallery-items.js";
// Change code below this line

const myGallery = document.querySelector(".gallery");
myGallery.classList.add("gallery__item");

myGallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.value === "gallery__image") {
    const instance = basicLightbox.create(`
          <img src="${e.target.dataset.source}" width="1280" height="720">
      `);

    instance.show();
  }
}); // Open Modal

galleryItems.forEach((e) => {
  const image = document.createElement("img");
  const link = document.createElement("a");
  myGallery.append(link);
  link.append(image);
  link.classList.add("gallery__link");
  link.setAttribute("href", e.original);
  image.classList.add("gallery__image");
  image.setAttribute("src", e.preview);
  image.setAttribute("alt", e.description);
  image.dataset.source = e.original;
}); // lighting galleries
