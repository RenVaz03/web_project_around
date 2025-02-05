const openModal = document.querySelector('.profile__info-edit');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const saveButton = document.querySelector('.modal__save');
const nameInput = document.querySelector('.modal__name');
const aboutInput = document.querySelector('.modal__abt-me');
const profileName = document.querySelector('.profile__info-name');
const profileProfession = document.querySelector('.profile__info-profession');

const openAdd = document.querySelector('.profile__button-add')
const add = document.querySelector('.add');
const closeAdd = document.querySelector('.add__close');
const addSaveButton = document.querySelector('.add__save');
const titleInput = document.querySelector('.add__title');
const urlInput = document.querySelector('.add__url');
const cardTitle = document.querySelector('.card__title-name');
const cardLink = document.querySelector('.card__link');
const cardGallery = document.querySelector('.gallery')
const likeButton = document.querySelector('.gallery__button-like')

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--active');

 
    nameInput.value = profileName.textContent;
    aboutInput.value = profileProfession.textContent;
});


closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--active');
});


saveButton.addEventListener('click', (e) => {
    e.preventDefault();


    profileName.textContent = nameInput.value;
    profileProfession.textContent = aboutInput.value;

    modal.classList.remove('modal--active');
});

openAdd.addEventListener('click', (e) => {
    e.preventDefault();
    add.classList.add('add--active');
});


closeAdd.addEventListener('click', (e) => {
    e.preventDefault();
    add.classList.remove('add--active');
});

addSaveButton.addEventListener('click', (e) => {
e.preventDefault();
add.classList.remove('add--active');
});

