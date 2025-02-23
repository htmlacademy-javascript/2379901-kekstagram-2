import { initThumbnails } from './thumbnails.js';
import { generatePhotos } from './pedestal.js';

document.addEventListener('DOMContentLoaded', () => {
  const photos = generatePhotos();

  initThumbnails(photos);
});
