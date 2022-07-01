export default class Card {
  constructor(values,cardSelector) {
    this._name = values.name
    this._image = values.link
    this._cardSelector = cardSelector
  }

  _getTempate(){
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    console.log(cardElement)
    return cardElement;
  }


  generateCard(){
    this._element = this._getTemplate()
    this._likeButton = this._element.querySelector('.card__like-button')
    this._deleteButton = this._element.querySelector('.card__delete-button')
    this._cardImage = this._element.querySelector('.card__image')
    this._cardTitle = this._element.querySelector('.card__title')
    this._cardTitle.textContent = this._name
    this._cardImage.alt = this._name
    this._cardImage.src = this._image
    console.log(this)
    console.log(this._element)
    return this._element
  }
}



/* const card = cardTemplate.querySelector('.card').cloneNode(true)
const likeButtonCard = card.querySelector('.card__like-button')
const deleteButtonCard = card.querySelector('.card__delete-button')
const cardImage = card.querySelector('.card__image')
const cardTitle = card.querySelector('.card__title')
cardTitle.textContent = item.name
cardImage.alt = item.name
cardImage.src = item.link
likeButtonCard.addEventListener('click', activateLike)
deleteButtonCard.addEventListener('click', deleteCard)
cardImage.addEventListener('click', ()=>{openPreviewImage(item)})
return card */
