import { isEscEvent } from "./util.js";

const body = document.querySelector('body');
const bigPhoto = document.querySelector('.big-picture');
const closeButton = bigPhoto.querySelector('.big-picture__cancel');
const commentList = bigPhoto.querySelector('.social__comments');
const commentListFragment = document.createDocumentFragment();
const commentTemplate = document.querySelector('.social__comment');

const getComments = (comments) => {
    clearCommentList();

    comments.forEach(comment => {
        const commentMessage = commentTemplate.cloneNode(true);

        commentMessage.querySelector('.social__picture').src = comment.avatar;
        commentMessage.querySelector('.social__text').textContent = comment.message;

        commentListFragment.appendChild(commentMessage);
    });

    commentList.appendChild(commentListFragment);
}

const showBigPhoto = (thumbnail) => {
    document.addEventListener('keydown', onCloseEsc);
    body.classList.add('modal-open');

    bigPhoto.querySelector('.big-picture__img > img').src = thumbnail.url;
    bigPhoto.querySelector('.likes-count').textContent = thumbnail.likes;
    bigPhoto.querySelector('.social__comment-total-count').textContent = thumbnail.comments.length;
    bigPhoto.querySelector('.social__caption').textContent = thumbnail.description;
    getComments(thumbnail.comments);
    bigPhoto.querySelector('.social__comment-count').classList.add('hidden');
    bigPhoto.querySelector('.comments-loader').classList.add('hidden');

    bigPhoto.classList.remove('hidden');
    setupCloseButtonHandler();
};

const clearCommentList = () => {
    commentList.innerHTML = '';
};

const onCloseEsc = (evt) => {
    if (isEscEvent(evt)) {
        evt.preventDefault();
        closeBigPhoto();
        clearCommentList();
    };
};

const closeBigPhoto = () => {
    bigPhoto.classList.add('hidden');
    body.classList.remove('modal-open');
};

const setupCloseButtonHandler = () => {
    closeButton.addEventListener('click', () => {
        closeBigPhoto();
        clearCommentList();
    });
};

export { showBigPhoto, onCloseEsc };