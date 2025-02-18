import {getRandomInteger} from './util.js';
import {MESSAGES, NAMES} from './data.js';

// Генерация одного комментария
const createComment = (id) => ({
  id: id + 1,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const getNumberComment = () => getRandomInteger(0, 30);
const getNumberLike = () => getRandomInteger(15, 200);
const QUANTITY_POSTS = 25;

// Генерация одного фото
const createPhotoItem = (id) => ({
  
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: `Фото №${id + 1}`,
  likes: getNumberLike(),
  comments: Array.from(
    { length: getNumberComment() }, 
    (_, commentIndex) => createComment(commentIndex)
  )
});

const createPhoto = Array.from({ length: QUANTITY_POSTS }, (_, index) => createPhotoItem(index));

export { createPhoto };
