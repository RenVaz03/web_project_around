export default class Popup {
    constructor(popupSelector){
     this._popup = document.querySelector(popupSelector);
     this._handleEscClose = this._handleEscClose.bind(this);
    };

    open(){
        this._popup.classList.add("popup--active");
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popup.classList.remove("popup--active");
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt){
        if(evt.key === 'Escape'){
            this.close();
        }
    }

    setEventListener(){
        this._popup.addEventListener('click', (evt)=> {
            if (
                evt.target.classList.contains('popup__close')||
                evt.target.classList.contains('modal__close')||
                evt.target.classList.contains('add__close')||
                evt.target === this._popup
            ) {
                this.close();
            }
        });
    }
}