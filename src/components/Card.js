export default class Card {
  constructor(values,cardSelector, handleCardClick) {
    this._name = values.name
    this._link = values.link
    this._cardSelector = cardSelector
    this._handleCardClick = handleCardClick
  }

  _getTemplate(){
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }

  _setEventListeners () {
    this._likeButton.addEventListener('click', ()=>{
      this._handleLikeClick()
    })
    this._deleteButton.addEventListener('click', ()=>{
      this._handleDeleteClick()
    })
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('card__like-button_active')
  }

  _handleDeleteClick() {
    this._element.remove()
    this._element = null
  }

  generateCard(){
    this._element = this._getTemplate()
    this._likeButton = this._element.querySelector('.card__like-button')
    this._deleteButton = this._element.querySelector('.card__delete-button')
    this._cardImage = this._element.querySelector('.card__image')
    this._cardTitle = this._element.querySelector('.card__title')
    this._cardTitle.textContent = this._name
    this._cardImage.alt = this._name
    this._cardImage.src = this._link
    this._setEventListeners()
    return this._element
  }
}

