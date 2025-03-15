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

document.addEventListener("keydown", function (e){
    if(e.key === "Escape") {
    modal.classList.remove('modal--active')
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

document.addEventListener("keydown", function (e){
    if(e.key === "Escape") {
    add.classList.remove('add--active')
    }
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

function addImagePopupListener(image) {
    image.addEventListener('click', () => {
        const imageUrl = image.src;
        openImagePopup(imageUrl);
    });
}

function createCard(title, imageUrl) {
    const card = document.createElement('div');
    card.classList.add('gallery');

 
    const cardImage = document.createElement('img');
    cardImage.src = imageUrl;
    cardImage.alt = title;
    cardImage.classList.add('gallery__images');

    addImagePopupListener(cardImage);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('gallery__images-element');

    const cardTitle = document.createElement('p');
    cardTitle.textContent = title;
    cardTitle.classList.add('gallery__image-name');

    const likeButton = document.createElement('button');
    likeButton.classList.add('gallery__button-like');
    const likeIcon = document.createElement('img');
    likeIcon.src = './images/HeartButton.png';
    likeIcon.alt = 'boton de like';
    likeButton.appendChild(likeIcon);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('gallery__button-delete');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = './images/trashButton.png';
    deleteIcon.alt = 'boton de basura';
    deleteButton.appendChild(deleteIcon);

    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('gallery__button-like_active');
    });

    deleteButton.addEventListener('click', function(evt) {
        const card = evt.target.closest('.gallery'); 

        card.remove()
    });

    cardDetails.appendChild(cardTitle);
    cardDetails.appendChild(likeButton);
    cardDetails.appendChild(deleteButton);
    card.appendChild(cardImage);
    card.appendChild(cardDetails);

    return card;
}

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