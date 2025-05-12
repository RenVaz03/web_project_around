export function modalOpen(modal){
  modal.classList.add("modal--active");
}

export function modalClose(modal){
  modal.classList.remove("modal.popup--active");
}

export function addOpen(add){
    add.classList.add("add--active");
}

export function addClose(add){
    add.classList.remove("add--active");
}

export function imagePopupOpen(popup, imageElement, url){
    imageElement.src = url;
    popup.classList.add("popup--active");
}

export function imagePopupClose(popup) { 
    popup.classList.remove("popup--active"); 
}