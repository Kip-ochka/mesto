//функция для открытия и закрытия попапа
function open(variable) {
  variable.classList.add('popup_opened')
}

function close(variable) {
  variable.classList.remove('popup_opened')
}
//------------------------------------------------------

//реализация открытия формы редактирования профиля
const editButton = document.querySelector('.profile__edit-button')//кнопка редактирования профиля
const popUpEdit = document.querySelector('.popup_type_edit-profile') //блок попап редактирования профиля
const resetEditButton = document.querySelector('.popup__reset-button_type_edit')

function openEditForm (){
  open(popUpEdit)
  jobInput.value = document.querySelector('.profile__job').textContent
  nameInput.value = document.querySelector('.profile__name').textContent
}

function closeEditForm(){
  close(popUpEdit)
}

editButton.addEventListener('click', openEditForm)
resetEditButton.addEventListener('click', closeEditForm)//если нет изменений и закрывается попап
//-------------------------------------------------------------------------------------------------------------

//реализация изменеия профиля
const formElement = document.querySelector('.popup__container_type_edit') //контейнер
const nameInput = document.querySelector('.popup__input_type_name') //поле ввода имени профиля
const jobInput = document.querySelector('.popup__input_type_job') // поле ввода описания профиля

function formSubmitHandler (evt) {
  evt.preventDefault()
  document.querySelector('.profile__job').textContent = jobInput.value
  document.querySelector('.profile__name').textContent = nameInput.value
  close(popUpEdit)
}

formElement.addEventListener('submit', formSubmitHandler); // отправление данных в шапку профиля
//--------------------------------------------------------------------------------------------------------------

//Пр5
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
//--------------------------------------------------------------------------------------------------------------

//рендер карточек на странице
initialCards.forEach(function (item){
  const cardTemplate = document.querySelector('#card-template').content
  const card = cardTemplate.querySelector('.card').cloneNode(true)
  const cardGrid = document.querySelector('.card-grid')
  card.querySelector('.card__title').textContent = item.name
  card.querySelector('.card__image').src = item.link
  cardGrid.append(card)
})
//-----------------------------------------------------------------------------

//реализация открытия и закрытия попапа с добавлением карточек.
const addButton = document.querySelector('.profile__add-button')
const popUpAdd = document.querySelector('.popup_type_add-card')
const resetAddButton = document.querySelector('.popup__reset-button_type_add')

function openAddButton(){
  open(popUpAdd)
}

function closeAddButton () {
  close(popUpAdd)
}

addButton.addEventListener('click', openAddButton)
resetAddButton.addEventListener('click', closeAddButton)
//-----------------------------------------------------------------------------------

// реализация добавления новой карточки
const cardFormElement = document.querySelector('.popup__container_type_add')
const placeNameInput = document.querySelector('.popup__input_type_place-name')
const linkInput = document.querySelector('.popup__input_type_link')


function addCards (event) {
  event.preventDefault()
  const cardTemplate = document.querySelector('#card-template').content
  const card = cardTemplate.querySelector('.card').cloneNode(true)
  const cardGrid = document.querySelector('.card-grid')
  card.querySelector('.card__title').textContent = placeNameInput.value
  card.querySelector('.card__image').src = linkInput.value
  card.querySelector('.card__image').alt = placeNameInput.value
  cardGrid.prepend(card)
  close(popUpAdd)
}

cardFormElement.addEventListener('submit', addCards)
//-----------------------------------------------------------------------------


