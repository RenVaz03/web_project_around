import Popup from "./popup.js"

export default class PopupWithImages extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    this._imageElement = this._popup.querySelector('.popup__image');
    this._imageTitle = this._popup.querySelector('.popup__title');
    
  }

  open({ name, link }){
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._imageTitle.textContent = name;
    super.open() 
  }
}