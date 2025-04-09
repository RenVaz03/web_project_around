import Card from "./card.js";

function createCard(title, imageUrl) {
    const card = new Card({ name: title, link: imageUrl }, "#card-template", openImagePopup);
    return card.generateCard();
  }
  

const openModal = document.querySelector('.profile__info-edit');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const saveButton = document.querySelector('.modal__save');
const nameInput = document.querySelector('.modal__name');
const aboutInput = document.querySelector('.modal__abt-me');
const profileName = document.querySelector('.profile__info-name');
const profileProfession = document.querySelector('.profile__info-profession');
const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];


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

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        modal.classList.remove('modal--active');
    } else if (e.key === "Enter") {
        e.preventDefault();
        
        if (document.activeElement.tagName === "INPUT") {
            saveButton.click();
        }
    }
});


saveButton.addEventListener('click', (e) => {
    e.preventDefault();


    profileName.textContent = nameInput.value;
    profileProfession.textContent = aboutInput.value;

    modal.classList.remove('modal--active');
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal--active');
    }
});

const openAdd = document.querySelector('.profile__button-add')
const add = document.querySelector('.add');
const closeAdd = document.querySelector('.add__close');
const addSaveButton = document.querySelector('.add__save');
const titleInput = document.querySelector('.add__title');
const urlInput = document.querySelector('.add__url');
const cardTitle = document.querySelector('.card__title-name');

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


add.addEventListener('click', (e) => {
    if (e.target === add) {
        add.classList.remove('add--active');
    }
});

const photoGallery = document.querySelector('.photo__gallery');

initialCards.forEach(card => {
    const newCard = createCard(card.name, card.link);
    photoGallery.appendChild(newCard);
});

addSaveButton.addEventListener('click', (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const imageUrl = urlInput.value;

    if (title && imageUrl) {
        const newCard = createCard(title, imageUrl);

        photoGallery.appendChild(newCard);

        titleInput.value = '';
        urlInput.value = '';
    }
});


const imagePopup = document.querySelector('.popup__container');
const popupImage = document.querySelector('.popup__image');
const popupClose = document.querySelector('.popup__close');
const popupTitle = document.querySelector('.popup__title');


function openImagePopup(imageUrl) {
    popupImage.src = imageUrl; 
    imagePopup.classList.add('popup--active'); 
}


function closeImagePopup() { 
    imagePopup.classList.remove('popup--active'); 
}


const galleryImages = document.querySelectorAll('.gallery__images'); 
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const imageUrl = image.src; 
        openImagePopup(imageUrl); 
    });
}); 


popupClose.addEventListener('click', closeImagePopup); 

imagePopup.addEventListener('click', (e) => {
    if (e.target === imagePopup) {
        closeImagePopup();
    }
});
