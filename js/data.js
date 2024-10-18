import {getRandomInteger} from './util.js';

//Массив имен
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

//Массим сообщений комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Функция получения случайного числа


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
