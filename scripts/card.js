export default class Card {
    constructor(data, templateSelector, handlePreview) {
        this._title = data.name
        this._image = data.link
        this._templateSelector =templateSelector;
        this._handlePreview = handlePreview;
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
        this._likeButton.addEventListener("click", () => this._handleLike());
        this._deleteButton.addEventListener("click", () => this._handleDelete());
        this._cardImage.addEventListener("click", () => this._handlePreview());
    }

    _handleLike(){
        this._likeButton.classList.toggle("gallery__button-like_active");
    }

    _handleDelete(){
        this._element.remove();
        this._element = null;
    }

    _handlePreview(){
        this._handlePreview(this._image, this._title);
    }
}