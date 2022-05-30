//переменные
const editButton = document.querySelector('.profile__edit-button')// кнопка редактирования профиля
const popUpEdit = document.querySelector('.popup_type_edit-profile') // блок попап редактирования профиля
const resetEditButton = document.querySelector('.popup__reset-button_type_edit') // кнопка закрытия попапа редактирования профиля
const formElement = document.querySelector('.popup__container_type_edit') //контейнер формы редактирования
const nameInput = document.querySelector('.popup__input_type_name') // поле ввода имени профиля
const jobInput = document.querySelector('.popup__input_type_job') // поле ввода описания профиля
const cardFormElement = document.querySelector('.popup__container_type_add') // контейнер формы добавления карточки
const placeNameInput = document.querySelector('.popup__input_type_place-name') // импут имени карточки
const linkInput = document.querySelector('.popup__input_type_link') // импут ссылки карточки
const cardGrid = document.querySelector('.card-grid') // контейнер для карточек
const addButton = document.querySelector('.profile__add-button') // кнопка добавления новой карточки
const popUpAdd = document.querySelector('.popup_type_add-card') // попап окно для добавления карточки
const resetAddButton = document.querySelector('.popup__reset-button_type_add') // кнопка закрытия попапа добавления карточки
const popUpAddForm = document.querySelector('.popup__form-wrapper_type_add-card') // form добавления карточки
const popUpPreview = document.querySelector('.popup_type_opened-photo')
const resetPreviewButton = document.querySelector('.popup__reset-button_type_opened-photo')
const previewImage = document.querySelector('.popup__opened-photo')
const previewText = document.querySelector('.popup__figcaption')
//----------------------------------------------------------------------------------------------------------------------------------------
//функция для открытия и закрытия попапа
function open (popup) {
  popup.classList.add('popup_opened')
}

function close (popup) {
  popup.classList.remove('popup_opened')

}
//----------------------------------------------------------------------------------------------------------------------------------------

//реализация открытия формы редактирования профиля
function openEditForm () {
  open(popUpEdit)
  jobInput.value = document.querySelector('.profile__job').textContent
  nameInput.value = document.querySelector('.profile__name').textContent
}
function closeEditForm () {
  close(popUpEdit)
}

editButton.addEventListener('click', openEditForm)
resetEditButton.addEventListener('click', closeEditForm)//если нет изменений и закрывается попап
//----------------------------------------------------------------------------------------------------------------------------------------

//реализация изменеия профиля
function formSubmitHandler (evnt) {
  evnt.preventDefault()
  document.querySelector('.profile__job').textContent = jobInput.value
  document.querySelector('.profile__name').textContent = nameInput.value
  close(popUpEdit)
}

formElement.addEventListener('submit', formSubmitHandler); // отправление данных в шапку профиля
//----------------------------------------------------------------------------------------------------------------------------------------

// Функции по работе с функционалом добавления карточек на страницу пользователем

//реализация открытия и закрытия попапа с добавлением карточек.
function openAddButton () {
  open(popUpAdd)
  popUpAddForm.reset()
}

function closeAddButton () {
  close(popUpAdd)
  popUpAddForm.reset()
}

addButton.addEventListener('click', openAddButton)
resetAddButton.addEventListener('click', closeAddButton)
//----------------------------------------------------------------------------------------------------------------------------------------

// функция которая создает карточку
function createCard (item) {
  const cardTemplate = document.querySelector('#card-template').content
  const card = cardTemplate.querySelector('.card').cloneNode(true)
  const cardImage = card.querySelector('.card__image')
  const cardTitle = card.querySelector('.card__title')
  cardImage.alt = item.name
  cardImage.src = item.link
  cardTitle.textContent = item.name
  card.querySelector('.card__like-button').addEventListener('click', activateLike)
  card.querySelector('.card__delete-button').addEventListener('click', deleteCard)
  cardImage.addEventListener('click', ()=>{
    openCardImagePreview ()
    openPreviewImage (item)
  })
  return card
}
//----------------------------------------------------------------------------------------------------------------------------------------

//взаимодействия с карточками
function activateLike (evnt) {
  evnt.target.classList.toggle('card__like-button_active')
}

function deleteCard (evnt) {
  evnt.target.closest('.card').remove()
}


function openCardImagePreview () {
  open(popUpPreview)
}

function closeCardImagePreview () {
  close(popUpPreview)
}

resetPreviewButton.addEventListener('click', closeCardImagePreview)

function openPreviewImage (item) {
  previewImage.src = item.link
  previewText.textContent = item.name
}

//----------------------------------------------------------------------------------------------------------------------------------------

// функция создающая карточку c загрузкой страницы из значений инпутов формы добавления карточки
function createCardFromForm (event) {
  event.preventDefault()
  const inputValues = {
    name: placeNameInput.value,
    link: linkInput.value,
  }
  const innerEL = createCard(inputValues)
  cardGrid.prepend(innerEL)
  close(popUpAdd)
}
cardFormElement.addEventListener('submit', createCardFromForm) // слушатель на подверждение отправки формы создания новой карточки
//---------------------------------------------------------------------------------------------------------------------------------------

//массив карточек
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

// пререндер карточек из массива
initialCards.forEach((item)=>{
  const prerendered = createCard(item)
  cardGrid.append(prerendered)
})
//----------------------------------------------------------------------------------------------------------------------------------------



