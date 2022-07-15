import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, enableValidation){
    super(popupSelector)
    this._enableValidation = enableValidation
    this._inputList = this._popupSelector.querySelector('.form').querySelectorAll('.form__input')
  }

  _getInputValues(){
    this._inputsData = {}
    this._inputList.forEach(input => {
      return this._iputsData[input.name] = input.value
    })
    return this._inputsData;
  }

  setEventListeners(){
    super.setEventListeners()

  }

}
