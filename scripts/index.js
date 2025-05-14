import {
    modalOpen,
    modalClose,
    addOpen,
    addClose,
    imagePopupOpen,
    imagePopupClose,
} from "./utils.js"

import Card from "../components/card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/section.js";
import Popup from "../components/Popup.js";
import PopupWithImages from "../components/PopupWithImages.js";
import PopupWithForms from "../components/PopupWithForms.js";
import UserInfo from "../components/userInfo.js";

function createCard(title, imageUrl) {
    const card = new Card({ name: title, link: imageUrl }, "#card-template", openImagePopup);
    return card.generateCard();
  }
   
function renderCard(item){
    const cardElement = createCard(item.name, item.link);
    Section.addItem(cardElement);
}

const config = {
errorClass: "modal__error-active",
inputErrorClass: "modal__input-error"
};

const allForms = document.querySelectorAll("form");

allForms.forEach((form) => {
    const validator = new FormValidator(config, form);
    validator.enableValidation();
});

const openModal = document.querySelector('.profile__info-edit');
const nameInput = document.querySelector('.modal__name');
const aboutInput = document.querySelector('.modal__abt-me');
const openAdd = document.querySelector('.profile__button-add')
const add = document.querySelector('.add');
const closeAdd = document.querySelector('.add__close');
const addSaveButton = document.querySelector('.add__save');
const titleInput = document.querySelector('.add__title');
const urlInput = document.querySelector('.add__url');
const cardTitle = document.querySelector('.card__title-name');
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

const userInfo = new UserInfo({
 nameSelector: ".profile__info-name",
 jobSelector: ".profile__info-profession"
});


const modalPopup = new PopupWithForms('.modal', (formData) => {
    userInfo.setUserInfo({
        name: formData.name,
        job: formData.job
    });  
    modalPopup.close();
});

modalPopup.setEventListener();

openModal.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userInfo.getUserInfo().name;
    aboutInput.value = userInfo.getUserInfo().job;
    modalPopup.open();
 }); 

const addPopup = new PopupWithForms ( '.add', (formData) => {
    const newCard= createCard(formData.title, formData.url);
    section.addItem(newCard);
    addPopup.close();
});

addPopup.setEventListener();

openAdd.addEventListener('click', () => {
    titleInput.value ="";
    urlInput.value = "";
    addPopup.open();
});

const photoGallery = document.querySelector('.photo__gallery');

initialCards.forEach(card => {
    const newCard = createCard(card.name, card.link);
    photoGallery.appendChild(newCard);
});



const imagePopup = document.querySelector('.popup__container');
const popupImage = document.querySelector('.popup__image');
const popupClose = document.querySelector('.popup__close');



function openImagePopup(imageUrl) {
   imagePopupOpen(imagePopup, popupImage, imageUrl); 
}

popupClose.addEventListener("click", () => imagePopupClose(imagePopup));

 imagePopup.addEventListener("click", (e) => {
  if(e.target === imagePopup){
    imagePopupClose(imagePopup)
  }
 });


const galleryImages = document.querySelectorAll('.gallery__images'); 
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const imageUrl = image.src; 
        openImagePopup(imageUrl); 
    });
}); 

const section = new Section(
    {
        items: initialCards,
        renderer: renderCard
    },
    ".photo__gallery"
    );
    
    section.renderItem();