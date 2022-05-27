const editButton = document.querySelector('.profile__edit-button')
const popUp = document.querySelector('.popup')
const resetButton = document.querySelector('.popup__reset-button')
const formElement = document.querySelector('.popup__container')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')

function open() {
  popUp.classList.add('popup_opened')
  jobInput.value = document.querySelector('.profile__job').textContent
  nameInput.value = document.querySelector('.profile__name').textContent
}

function close() {
  popUp.classList.remove('popup_opened')
}

editButton.addEventListener('click', open)
resetButton.addEventListener('click', close)

function formSubmitHandler (evt) {
  evt.preventDefault()
  document.querySelector('.profile__job').textContent = jobInput.value
  document.querySelector('.profile__name').textContent = nameInput.value
  close()
}

formElement.addEventListener('submit', formSubmitHandler);


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
