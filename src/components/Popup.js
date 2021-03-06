export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    document.addEventListener('keyup', this._handleEscClose)
    this._popupElement.classList.add('popup_opened')
  }

  close() {
    this._popupElement.classList.remove('popup_opened')
    document.removeEventListener('keyup', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners(){
    this._popupElement.addEventListener('mousedown',(evt) => {
      if (evt.target.classList.contains('popup_opened')||evt.target.classList.contains('popup__close-button')) {
        this.close()
      }
    })
  }
}
