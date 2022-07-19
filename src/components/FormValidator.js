export default class FormValidator {
  constructor(config, formElement){
    this._formElement = formElement
    this._inputSelector = config.inputSelector
    this._sumbitButtonSelector = config.submitButtonSelector
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    this._buttonElement = this._formElement.querySelector(this._sumbitButtonSelector)
  }

  _hasInvalidInput () {
    return this._inputList.some ((input) => !input.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.setAttribute('disabled', '')
    } else {
      this._buttonElement.removeAttribute('disabled')
    }
  }

  _showInputErrors (inputElement) {
    inputElement.classList.add(this._inputErrorClass)
    this._errorElement.textContent = inputElement.validationMessage
    this._errorElement.classList.add(this._errorClass)
  }

  _hideInputErrors (inputElement) {
  if (!this._errorElement) return;
  inputElement.classList.remove(this._inputErrorClass)
  this._errorElement.textContent = ''
  this._errorElement.classList.remove(this._errorClass)
  }

  _isValid (inputElement) {
    this._errorElement = this._formElement.querySelector(`.form__input-error_type_${inputElement.name}`)
    if (!inputElement.validity.valid) {
    this._showInputErrors (inputElement)
    } else {
    this._hideInputErrors (inputElement)
    }
  }

  _setEventListeners() {
    this._toggleButtonState()
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () =>{
        this._isValid(inputElement)
        this._toggleButtonState()
      })
    })
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._errorElement = this._formElement.querySelector(`.form__input-error_type_${inputElement.name}`)
      this._hideInputErrors(inputElement, this._errorElement)
    });
  }

  enableValidation() {
    this._setEventListeners()
  }
}

