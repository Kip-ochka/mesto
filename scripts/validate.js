const hasInvalidInput = inputList => inputList.some ( input => !input.validity.valid);

const toggleButtonState = (inputList, buttonElement, inactiveButtonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonElement)
  } else {
    buttonElement.classList.remove(inactiveButtonElement)
  }
}

const showInputError = (inputElement, errorElement, setting) => {
  inputElement.classList.add(setting.errorClass)
  inputElement.textContent = errorElement.validationMessage
  errorElement.classList.add(setting.inputErrorClass)
}

const hideInputError = (inputElement,  errorElement, setting) => {
  inputElement.classList.remove(setting.errorClass)
  inputElement.textContent = ''
  errorElement.classList.remove(setting.inputErrorClass)
}

const isValid = (formElement, inputElement, setting) => {
  const errorElement = formElement.querySelector(`.form__input-error_type_${inputElement.name}`)
  if (!inputElement.validity.valid) {
    showInputError (errorElement, inputElement, setting)
  } else {
    hideInputError(errorElement, inputElement, setting)
  }
}

const setEventListeners = (formElement, setting) => {
  const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector))
  const buttonElement = formElement.querySelector(setting.submitButtonSelector)
  const inactiveButtonElement = setting.inactiveButtonClass

  toggleButtonState(inputList, buttonElement,inactiveButtonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, setting)
      toggleButtonState(inputList, buttonElement,inactiveButtonElement)
    })
  })
}

const enableValidation = (setting) => {
  const formList = document.querySelectorAll(setting.formSelector)
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
    setEventListeners(formElement, setting)
  })
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
})


