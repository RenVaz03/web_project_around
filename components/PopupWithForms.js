import Popup from "./popup.js"

export default class PopupWithForms extends Popup{
  constructor(popupSelector, handleFormSubmit){
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('form');
    this._inputList = Array.from(this._popup.querySelectorAll('input'));
  }

  _getInputValues(){
    const inputValues = {};
    this._inputList.forEach(input =>{
     inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListener(){
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    });
  }
 close(){
    super.close();
    this._form.reset();
 };
}