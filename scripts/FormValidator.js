export default class FormValidator {
  constructor(setting, formElement){
    this._formElement = formElement
    this._inputSelector = setting.inputSelector
    this._sumbitButtonSelector = setting.submitButtonSelector
    this._inputErrorClass = setting.inputErrorClass
    this._errorClass = setting.errorClass
  }

  _hasInvalidInput (inputList) {
   return inputList.some ((input) => !input.validity.valid);
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', '')
    } else {
      buttonElement.removeAttribute('disabled')
    }
  }

  _showInputErrors (errorElement, inputElement) {
    inputElement.classList.add(this._inputErrorClass)
    errorElement.textContent = inputElement.validationMessage
    errorElement.classList.add(this._errorClass)
  }

  _hideInputErrors (errorElement, inputElement) {
  inputElement.classList.remove(this._inputErrorClass)
  inputElement.textContent = ''
  errorElement.classList.remove(this._errorClass)
  }

  _isValid (inputElement) {
    const errorElement = this._formElement.querySelector(`.form__input-error_type_${inputElement.name}`)
    if (!inputElement.validity.valid) {
    this._showInputErrors (errorElement, inputElement)
    } else {
    this._hideInputErrors (errorElement, inputElement)
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    const buttonElement = this._formElement.querySelector(this._sumbitButtonSelector)
    this._toggleButtonState(inputList, buttonElement)
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () =>{
        this._isValid(inputElement)
        this._toggleButtonState(inputList, buttonElement)
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    })
    this._setEventListeners()
  }
}
