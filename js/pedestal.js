import {getRandomInteger} from './util.js';
import {MESSAGES} from './data.js';
import {NAMES} from './data.js';

//Сообщение коментария
const createComment = (_, index) => {
  const indexMessage = getRandomInteger(0, MESSAGES.length - 1);
  const indexName = getRandomInteger(0, NAMES.length - 1);
  const idAvatar = getRandomInteger(1, 6);

  const comment = {
    id: index + 1,
    avatar: `img/avatar-${idAvatar()}.svg`,
    message: `${MESSAGES[indexMessage()]}. ${MESSAGES[indexMessage()]}`,
    name: `${NAMES[indexName()]}`
  };

  return comment;
};

const numberComment = getRandomInteger(0, 30);
const numberLike = getRandomInteger(15, 200);
const arrayLength = 25;

const createPhoto = (_, index) => {
  const photo = {
    id: index + 1,
    url: 'photos/${index + 1}.jpg',
    description: 'Фото №${index + 1}',
    likes: numberLike(),
    comment: Array.from({length : numberComment()}, createComment)
  };

  return photo;
};

const photoArray = Array.from({length : arrayLength}, createPhoto);

console.log(photoArray);
