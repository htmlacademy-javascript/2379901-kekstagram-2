import { isEscEvent } from "./util.js";

const COMMENTS_PER_PORTION = 5;
let currentComments = [];
let commentsShown = 0;

const body = document.querySelector('body');
const bigPhoto = document.querySelector('.big-picture');
const closeButton = bigPhoto.querySelector('.big-picture__cancel');
const commentList = bigPhoto.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentCountElement = bigPhoto.querySelector('.social__comment-count');
const commentsLoader = bigPhoto.querySelector('.comments-loader');

// Добавлена функция очистки комментариев
const clearCommentList = () => {
  commentList.innerHTML = '';
};

const createComment = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const renderCommentsPortion = () => {
  const fragment = document.createDocumentFragment();
  const nextComments = currentComments.slice(commentsShown, commentsShown + COMMENTS_PER_PORTION);
  
  nextComments.forEach((comment) => {
    fragment.appendChild(createComment(comment));
  });

  commentList.appendChild(fragment);
  commentsShown += nextComments.length;

  commentCountElement.innerHTML = `
    ${commentsShown} из <span class="comments-count">${currentComments.length}</span> комментариев
  `;

  commentsLoader.classList.toggle('hidden', commentsShown >= currentComments.length);
};

const onCommentsLoaderClick = () => renderCommentsPortion();

const showComments = (comments) => {
  currentComments = comments;
  commentsShown = 0;
  clearCommentList(); // Используем функцию очистки
  commentsLoader.classList.remove('hidden');
  renderCommentsPortion();
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

// Исправленный обработчик Esc
const onCloseEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const closeBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
};

const setupCloseButtonHandler = () => {
  closeButton.addEventListener('click', () => {
    closeBigPhoto();
  });
};

const showBigPhoto = (thumbnail) => {
  document.addEventListener('keydown', onCloseEsc);
  body.classList.add('modal-open');

  bigPhoto.querySelector('.big-picture__img > img').src = thumbnail.url;
  bigPhoto.querySelector('.likes-count').textContent = thumbnail.likes;
  bigPhoto.querySelector('.social__caption').textContent = thumbnail.description;

  commentCountElement.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  showComments(thumbnail.comments);
  bigPhoto.classList.remove('hidden');
  setupCloseButtonHandler();
};

export { showBigPhoto, onCloseEsc };