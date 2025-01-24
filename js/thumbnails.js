import {MOCKED_PHOTOS} from './example.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const craeteThumbnail = (photo) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.lenght;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};

const fragment = document.createDocumentFragment();

MOCKED_PHOTOS.forEach((photo) => {
  const thumbnail = craeteThumbnail(photo);
  fragment.appendChild(thumbnail);
});
container.appendChild(fragment);
