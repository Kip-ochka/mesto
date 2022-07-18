const buttonOpenEditProfile = document.querySelector('.profile__edit-button')// кнопка редактирования профиля
const popUpEditProfile = document.querySelector('.popup_type_edit-profile') // блок попап редактирования профиля
const cardGrid = document.querySelector('.card-grid') // контейнер для карточек
const buttonAddNewCard = document.querySelector('.profile__add-button') // кнопка добавления новой карточки
const popUpAdd = document.querySelector('.popup_type_add-card') // попап окно для добавления карточки
const profileJobTextContent = document.querySelector('.profile__job')
const profileNameTextContent = document.querySelector('.profile__name')
const popUpPreview = document.querySelector('.popup_type_opened-photo')

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export{buttonOpenEditProfile, popUpEditProfile, cardGrid, buttonAddNewCard, popUpAdd, profileJobTextContent, profileNameTextContent, popUpPreview, config, initialCards}

