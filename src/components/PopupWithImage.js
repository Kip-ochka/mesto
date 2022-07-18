import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector)
    this._image = document.querySelector('.popup__opened-photo')
    this._figcaption = document.querySelector('.popup__figcaption')
  }

  open(name, link) {
    this._image.alt = name
    this._image.src = link
    this._figcaption.textContent = name
    super.open()
  }
}

