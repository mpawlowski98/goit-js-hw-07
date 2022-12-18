import { galleryItems } from "./gallery-items.js";
// Change code below this line
const myGallery = document.querySelector(".gallery");

const myGalleryItemsMap = galleryItems
  .map((item) => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a>`;
  })
  .join("");
myGallery.insertAdjacentHTML("beforeend", myGalleryItemsMap);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
  captionPosition: `bottom`,
});
