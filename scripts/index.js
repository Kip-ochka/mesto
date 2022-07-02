import FormValidator from './FormValidator.js'
import {Card} from './Card.js'
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
//----------------------------------------------------------------------------------------------------------------------------------------
//функции для открытия и закрытия попапов
function open (popup) {
  document.addEventListener('keyup', closeOpenedByEsc)
  popup.classList.add('popup_opened')
}

function close (popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keyup',closeOpenedByEsc)
}

function closeOpenedByEsc(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector(".popup_opened");
    close(openedPopup);
}}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')||evt.target.classList.contains('popup__close-button')) {
        close(popup)
      }
  })
})
//----------------------------------------------------------------------------------------------------------------------------------------
//реализация открытия формы редактирования профиля
function openEditForm () {
  jobInput.value = profileJobTextContent.textContent
  nameInput.value = profileNameTextContent.textContent
  open(popUpEditProfile)
}
//----------------------------------------------------------------------------------------------------------------------------------------
//реализация изменеия профиля
function handleSubmitEditProfile (evnt) {
  evnt.preventDefault()
  profileJobTextContent.textContent = jobInput.value
  profileNameTextContent.textContent = nameInput.value
  close(popUpEditProfile)
}
//----------------------------------------------------------------------------------------------------------------------------------------
//реализация открытия попапа с добавлением карточек.
function openAddButton () {
  open(popUpAdd)
}
//----------------------------------------------------------------------------------------------------------------------------------------
//отдельная функция создания карточек
function createCard(inputValues) {
  const card = new Card(inputValues, '#card-template', handleCardClick)
  return card.generateCard()
}
// функция создающая карточку c загрузкой страницы из значений инпутов формы добавления карточки
function handleCreateCardFromForm (event) {
  event.preventDefault()
  const inputValues = {
    name: placeNameInput.value,
    link: linkInput.value,
  }
  cardGrid.prepend(createCard(inputValues))
  close(popUpAdd)
  popUpAddForm.reset()
}
//---------------------------------------------------------------------------------------------------------------------------------------
// рендер карточек из массива
initialCards.forEach((inputValues)=>{
  cardGrid.prepend(createCard(inputValues))
})
//----------------------------------------------------------------------------------------------------------------------------------------
//Валидация форм
const formValidators = {}

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
//----------------------------------------------------------------------------------------------------------------------------------------
// эвент листенры и вызовы
formEditElement.addEventListener('submit', handleSubmitEditProfile); // отправление данных в шапку профиля
cardFormElement.addEventListener('submit', handleCreateCardFromForm)
buttonOpenEditProfile.addEventListener('click', ()=>{
  formValidators['profile'].resetValidation()
  openEditForm ()
})
buttonAddNewCard.addEventListener('click', ()=> {
  formValidators['addcard'].resetValidation()
  openAddButton ()
})
//----------------------------------------------------------------------------------------------------------------------------------------
function handleCardClick(name, link) {
  previewImage.alt = name
  previewImage.src = link
  previewText.textContent = name
  open(popUpPreview)
}

export {open}
