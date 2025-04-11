export default class FormValidator {
  constructor (config, formElement){
    this._config = config;
    this._formElement = formElement;
    this._input = Array.from(this._formElement.querySelectorAll("input"));
    this._submitButton = this._formElement.querySelector("button[type='submit']");
  }

  enableValidation(){
    this._setEventListener();
    this._checkFormValidity();
  }

  _showError(input){
    const errorElement = this._formElement.querySelector(`.${input.id}__error`);
    if (errorElement) {
      errorElement.textContent = input.validationMessage;
      errorElement.classList.add(this._config.errorClass);
      input.classList.add(this._config.inputErrorClass)
    }
  }

  _hideError(input){
    const errorElement = this._formElement.querySelector(`.${input.id}__error`);
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.remove(this._config.errorClass);
      input.classList.remove(this._config.inputErrorClass)
    }
  }

  _checkInputValidity(input){
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }

  _checkFormValidity() {
   this._submitButton.disabled = !this._formElement.checkValidity();
  }

  _setEventListener(){
    this._input.forEach((input) => {
      input.addEventListener("input", () => {
        input.reportValidity();
        this._checkInputValidity(input);
        this._checkFormValidity();
      });
    });
  
   
  this._formElement.addEventListener("submit", (evt) => {
    if (!this._formElement.checkValidity()) {
      evt.preventDefault();
      this._formElement.reportValidity();
    } else {
      this._formElement.reset();
      this._checkFormValidity();
    }
  });
 }

}

  