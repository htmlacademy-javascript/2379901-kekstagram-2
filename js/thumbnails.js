import { createPhoto } from "./pedestal.js";
import { showBigPhoto } from "./open-big-pictures.js";

const template = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsContainer = document.querySelector('.pictures');

const createThumbnail = (photo) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};

function initThumbnails () {
  const fragment = document.createDocumentFragment();

  createPhoto.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    thumbnail.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPhoto(photo);
    });
    fragment.appendChild(thumbnail);
  });

  thumbnailsContainer.appendChild(fragment);
};

export { initThumbnails };

