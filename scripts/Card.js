import {open} from './index.js';

const popUpPreview = document.querySelector('.popup_type_opened-photo')
const previewImage = document.querySelector('.popup__opened-photo')
const previewText = document.querySelector('.popup__figcaption')

export default class Card {
  constructor(values,cardSelector) {
    this._name = values.name
    this._link = values.link
    this._cardSelector = cardSelector
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
    this._element.querySelector('.card__like-button').addEventListener('click', ()=>{
      this._handleLikeClick()
    })
    this._element.querySelector('.card__delete-button').addEventListener('click', ()=>{
      this._handleDeleteClick()
    })
    this._element.querySelector('.card__image').addEventListener('click',()=>{
      this._handleImageClick()
    })
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('card__like-button_active')
  }

  _handleDeleteClick() {
    this._element.remove()
  }

  _handleImageClick() {
    previewImage.alt = this._name
    previewImage.src = this._link
    previewText.textContent = this._name
    open(popUpPreview)
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
