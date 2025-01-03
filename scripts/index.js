const openModal = document.querySelector('.profile__info_edit');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const saveButton = document.querySelector('.modal__save');
const nameInput = document.querySelector('.modal__name');
const aboutInput = document.querySelector('.modal__abt-me');
const profileName = document.querySelector('.profile__info-name');
const profileProfession = document.querySelector('.profile__info-profession');


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


