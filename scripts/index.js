import FormValidator from './FormValidator.js'
import Card from './Card.js'
import Section from './Section.js'
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js'
import UserInfo from './UserInfo.js'
//Переменные
const popups = document.querySelectorAll('.popup')
const buttonOpenEditProfile = document.querySelector('.profile__edit-button')// кнопка редактирования профиля
const popUpEditProfile = document.querySelector('.popup_type_edit-profile') // блок попап редактирования профиля
const formEditElement = document.querySelector('.popup__container_type_edit') //контейнер формы редактирования
const nameInput = document.querySelector('.form__input_type_name') // поле ввода имени профиля
const jobInput = document.querySelector('.form__input_type_job') // поле ввода описания профиля
const cardFormElement = document.querySelector('.popup__container_type_add') // контейнер формы добавления карточки
const placeNameInput = document.querySelector('.form__input_type_place-name') // импут имени карточки
const linkInput = document.querySelector('.form__input_type_link') // импут ссылки карточки
const cardGrid = document.querySelector('.card-grid') // контейнер для карточек
const buttonAddNewCard = document.querySelector('.profile__add-button') // кнопка добавления новой карточки
const popUpAdd = document.querySelector('.popup_type_add-card') // попап окно для добавления карточки
const popUpAddForm = document.querySelector('.form_type_add-card') // form добавления карточки
const profileJobTextContent = document.querySelector('.profile__job')
const profileNameTextContent = document.querySelector('.profile__name')
const popUpPreview = document.querySelector('.popup_type_opened-photo')
const previewImage = document.querySelector('.popup__opened-photo')
const previewText = document.querySelector('.popup__figcaption')

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

function createCard(inputValues) {
  const card = new Card(inputValues, '#card-template', handleCardClick)
  return card.generateCard()
}

function handleCreateCardFromForm (inputValues) {
  const card = createCard(inputValues)
  prerenderList.setItem(card)
  popupAddCard.close()
}

const prerenderList = new Section ({
  data: initialCards,
  renderer: (item)=>{
  const card = createCard(item)
    prerenderList.setItem(card)
  }
}, cardGrid)

prerenderList.renderItems()

const formValidators = {}
const bigPicOpen = new PopupWithImage(popUpPreview)
const popupEdit = new PopupWithForm(popUpEditProfile, handleSubmitEditProfile)
const popupAddCard = new PopupWithForm(popUpAdd, handleCreateCardFromForm)
const editInputs = {name:nameInput, job: jobInput}
const userInfo = new UserInfo(editInputs)

function handleCardClick(name, link) {
  bigPicOpen.open(name, link)
}

function openEditPopup(){
  popupEdit.open()
}

function openAddCardPopup(){
  popupAddCard.open()
}

function handleSubmitEditProfile (evnt) {
  evnt.preventDefault()
  userInfo.setUserInfo(editInputs)
  popupEdit.close()
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;

    validator.enableValidation();
  });
};

enableValidation(config)

popupEdit.setEventListeners()
bigPicOpen.setEventListeners()
popupAddCard.setEventListeners()

buttonOpenEditProfile.addEventListener('click', ()=>{
  formValidators['profile'].resetValidation()
  openEditPopup()
})
buttonAddNewCard.addEventListener('click', ()=> {
  formValidators['addcard'].resetValidation()
  openAddCardPopup()
})
