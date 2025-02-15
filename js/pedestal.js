import {getRandomInteger} from './util.js';
import {MESSAGES} from './data.js';
import {NAMES} from './data.js';

// Генерация одного комментария
const createComment = (id) => ({
  id: id + 1,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const numberComment = getRandomInteger(0, 30);
const numberLike = getRandomInteger(15, 200);
const quantityPosts = 25;

// Генерация одного фото
const createPhoto = (id) => ({
  id: id + 1,
  url: `photos/${id + 1}.jpg`,
  description: `Фото №${id + 1}`,
  likes: numberLike,
  comments: Array.from(
    { length: numberComment }, 
    (_, commentIndex) => createComment(commentIndex)
  )
});


const getPhotosList = Array.from({ length: quantityPosts }, (_, index) => createPhoto(index));

export {getPhotosList as createPhoto};
