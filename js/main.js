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
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  let previousResult = -1;
  return () => {
    const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

    if (previousResult !== result) {
      previousResult = result;
      return result;
    }
    return result === upper ? lower : result + 1;
  };
};

//Сообщение коментария
const createComment = () => {
  let id = 1;
  const indexMessage = getRandomInteger(0, MESSAGES.length - 1);
  const indexName = getRandomInteger(0, NAMES.length - 1);

  return () => {
    const comment = {};
    const idAvatar = getRandomInteger(1, 6);
    comment.id = id;
    comment.avatar = `img/avatar-${idAvatar()}.svg`;
    comment.message = `${MESSAGES[indexMessage()]}. ${MESSAGES[indexMessage()]}`;
    comment.name = `${NAMES[indexName()]}`;
    id++;

    return comment;
  };
};

const numberComment = getRandomInteger(0, 30);
const numberLike = getRandomInteger(15, 200);

const createPhoto = () => {
  let id = 1;

  return () => {
    const photo = {};
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = `Фото №${id}`;
    photo.likes = numberLike();
    photo.comment = Array.from({length : numberComment()}, createComment());
    id++;
    return photo;
  };
};

const photoArray = Array.from({length : 25}, createPhoto());

console.log(photoArray);
