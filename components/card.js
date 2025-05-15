export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._title = data.name
        this._image = data.link
        this._templateSelector =templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate(){
        const template = document
        .querySelector(this._templateSelector)
        .content
        .querySelector(".gallery")
        .cloneNode(true);

    return template;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector(".gallery__images");
        this._cardTitle = this._element.querySelector('.gallery__image-name');
        this._likeButton = this._element.querySelector('.gallery__button-like');
        this._deleteButton = this._element.querySelector('.gallery__button-delete');
    
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
        this._cardTitle.textContent = this._title;
    
        this._setEventListeners();
    
        return this._element;
    }

    _setEventListeners(){
        this._cardImage.addEventListener("click", () => this._handleCardClick(this._image, this._title));
        this._likeButton.addEventListener("click", () => this._handleLike());
        this._deleteButton.addEventListener("click", () => this._handleDelete());
    }

    _handleLike(){
        this._likeButton.classList.toggle("gallery__button-like_active");
    }

    _handleDelete(){
        this._element.remove();
        this._element = null;
    }
}