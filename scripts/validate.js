const enableValidation = () => {

    const form1 = document.querySelector(".modal__container");
    const modalName = form1.querySelector(".modal__name");
    const modalAboutMe = form1.querySelector(".modal__abt-me");
    const modalNameError = form1.querySelector(".name__error");
    const modalAbtMeError = form1.querySelector(".abt-me__error");
    const save = form1.querySelector("#saveButton");
   
   
   const showError = (input, errorElement) => {
     errorElement.textContent = input.validationMessage;
     errorElement.classList.add("modal__error-active");
     input.classList.add("modal__input-error"); 
     
   };
   
   
   const hideError = (input, errorElement) => {
     errorElement.textContent = "";
     errorElement.classList.remove("modal__error-active");
     input.classList.remove("modal__input-error");
   };
   
   const checkInputValidity = (input, errorElement) => {
     if (!input.validity.valid) {
       if (input.validity.valueMissing) {
         showError(input, errorElement);
       }
     } else {
       hideError(input, errorElement);
     }
   };
   
   const checkFormValidity = () => {
     if (form1.checkValidity()) {
       save.disabled = false;
     } else {
       save.disabled = true;
     }
   };
   
   modalName.addEventListener("input", () => {
     checkInputValidity(modalName, modalNameError);
     checkFormValidity();
   });
   
   modalAboutMe.addEventListener("input", () => {
     checkInputValidity(modalAboutMe, modalAbtMeError);
     checkFormValidity();
    });  
   
   
   
   form1.addEventListener("submit", function (evt) {
     if (!form1.checkValidity()) {
    return;
     }
   
     evt.preventDefault();
     form1.reset();
   });
   
   checkFormValidity();
   
   };
   
   enableValidation(); 