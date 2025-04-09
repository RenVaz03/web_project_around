const enableValidation = () => {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input");
    const submitButton = form.querySelector("button[type='submit']");

    const showError = (input) => {
      const errorElement = form.querySelector(`.${input.id}__error`);
      if (errorElement) {
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add("modal__error-active");
        input.classList.add("modal__input-error");
      }
    };

    const hideError = (input) => {
      const errorElement = form.querySelector(`.${input.id}__error`);
      if (errorElement) {
        errorElement.textContent = "";
        errorElement.classList.remove("modal__error-active");
        input.classList.remove("modal__input-error");
      }
    };

    const checkInputValidity = (input) => {
      if (!input.validity.valid) {
        showError(input);
      } else {
        hideError(input);
      }
    };

    const checkFormValidity = () => {
      submitButton.disabled = !form.checkValidity();
    };

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        input.reportValidity();
        checkInputValidity(input);
        checkFormValidity();
      });
    });

    form.addEventListener("submit", function (evt) {
      if (!form.checkValidity()) {
        evt.preventDefault();
        form.reportValidity();
      } else {
        form.reset();
        checkFormValidity();
      }
    });

    checkFormValidity();
  });
};

enableValidation();
