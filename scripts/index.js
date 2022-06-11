//переменные
const buttonOpenEditProfile = document.querySelector('.profile__edit-button')// кнопка редактирования профиля
const popUpEditProfile = document.querySelector('.popup_type_edit-profile') // блок попап редактирования профиля
const buttonCloseEditButton = document.querySelector('.popup__close-button_type_edit') // кнопка закрытия попапа редактирования профиля
const formElement = document.querySelector('.popup__container_type_edit') //контейнер формы редактирования
const nameInput = document.querySelector('.popup__input_type_name') // поле ввода имени профиля
const jobInput = document.querySelector('.popup__input_type_job') // поле ввода описания профиля
const cardFormElement = document.querySelector('.popup__container_type_add') // контейнер формы добавления карточки
const placeNameInput = document.querySelector('.popup__input_type_place-name') // импут имени карточки
const linkInput = document.querySelector('.popup__input_type_link') // импут ссылки карточки
const cardGrid = document.querySelector('.card-grid') // контейнер для карточек
const buttonAddNewCard = document.querySelector('.profile__add-button') // кнопка добавления новой карточки
const popUpAdd = document.querySelector('.popup_type_add-card') // попап окно для добавления карточки
const buttonCloseAddForm = document.querySelector('.popup__close-button_type_add') // кнопка закрытия попапа добавления карточки
const popUpAddForm = document.querySelector('.popup__form-wrapper_type_add-card') // form добавления карточки
const popUpPreview = document.querySelector('.popup_type_opened-photo')
const buttonClosePreview = document.querySelector('.popup__close-button_type_opened-photo')
const previewImage = document.querySelector('.popup__opened-photo')
const previewText = document.querySelector('.popup__figcaption')
const profileJobTextContent = document.querySelector('.profile__job')
const profileNameTextContent = document.querySelector('.profile__name')
const cardTemplate = document.querySelector('#card-template').content
const popup = document.querySelector('.popup')
//----------------------------------------------------------------------------------------------------------------------------------------

//функция для открытия и закрытия попапа
function open (popup) {
  popup.classList.add('popup_opened')
}

function close (popup) {
  popup.classList.remove('popup_opened')
}

function closeOpenedByEsc(evt) {
  if(evt.key === 'Escape') {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
}}
//----------------------------------------------------------------------------------------------------------------------------------------

//реализация открытия формы редактирования профиля
function openEditForm () {
  jobInput.value = profileJobTextContent.textContent
  nameInput.value = profileNameTextContent.textContent
  open(popUpEditProfile)
}

function closeEditForm () {
  close(popUpEditProfile)
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
//----------------------------------------------------------------------------------------------------------------------------------------

// функция которая создает карточку
function createCard (item) {
  const card = cardTemplate.querySelector('.card').cloneNode(true)
  const likeButtonCard = card.querySelector('.card__like-button')
  const deleteButtonCard = card.querySelector('.card__delete-button')
  const cardImage = card.querySelector('.card__image')
  const cardTitle = card.querySelector('.card__title')
  cardImage.alt = item.name
  cardImage.src = item.link
  cardTitle.textContent = item.name
  likeButtonCard.addEventListener('click', activateLike)
  deleteButtonCard.addEventListener('click', deleteCard)
  cardImage.addEventListener('click', ()=>{openPreviewImage(item)})
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

function closeCardImagePreview () {
  close(popUpPreview)
}

function openPreviewImage (item) {
  previewImage.src = item.link
  previewText.textContent = item.name
  open(popUpPreview)
}
//----------------------------------------------------------------------------------------------------------------------------------------

// функция создающая карточку c загрузкой страницы из значений инпутов формы добавления карточки
function handleCreateCardFromForm (event) {
  event.preventDefault()
  const inputValues = {
    name: placeNameInput.value,
    link: linkInput.value,
  }
  const innerEL = createCard(inputValues)
  cardGrid.prepend(innerEL)
  close(popUpAdd)
}
//---------------------------------------------------------------------------------------------------------------------------------------

// пререндер карточек из массива
initialCards.forEach((item)=>{
  const prerendered = createCard(item)
  cardGrid.append(prerendered)
})
//----------------------------------------------------------------------------------------------------------------------------------------

// эвент листенры и вызовы
formElement.addEventListener('submit', handleSubmitEditProfile); // отправление данных в шапку профиля
cardFormElement.addEventListener('submit', handleCreateCardFromForm)

buttonOpenEditProfile.addEventListener('click', openEditForm)
buttonAddNewCard.addEventListener('click', openAddButton)

popUpEditProfile.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup__close-button_type_edit')||evt.target.classList.contains('popup_type_edit-profile')){
    closeEditForm()
  }
})

popUpAdd.addEventListener('click', function(evt) {
  if(evt.target.classList.contains('popup__close-button_type_add')||evt.target.classList.contains('popup_type_add-card')){
    closeAddButton()
  }
})

popUpPreview.addEventListener('click',function(evt) {
  if(evt.target.classList.contains('popup__close-button_type_opened-photo')||evt.target.classList.contains('popup_type_opened-photo')){
    closeCardImagePreview()
  }
})


document.addEventListener('keyup', closeOpenedByEsc)
//----------------------------------------------------------------------------------------------------------------------------------------


