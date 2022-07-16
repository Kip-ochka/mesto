import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler){
    super(popupSelector)
    this._submitHandler = submitHandler
    this._form = this._popupSelector.querySelector('.form')
    this._inputList = this._form.querySelectorAll('.form__input')
  }

  _getInputValues(){
    this._inputsData = {}
    this._inputList.forEach(input => {
      return this._inputsData[input.id] = input.value
    })
    return this._inputsData;
  }

  setEventListeners(){
    super.setEventListeners()
    this._form.addEventListener('submit', (evt)=>{
      evt.preventDefault()
      this._submitHandler(this._getInputValues())
    } )
  }

  close(){
    this._form.reset()
    super.close()
  }

  setInputValues(obj) {
    this._inputsList.forEach(input => {
        input.value = obj[input.id];
    })
  }
}
