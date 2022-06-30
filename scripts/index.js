//testjopy1
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
// Функции по работе с функционалом добавления карточек на страницу пользователем
//реализация открытия попапа с добавлением карточек.
function openAddButton () {
  open(popUpAdd)
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

function openPreviewImage (item) {
  previewImage.src = item.link
  previewImage.alt = item.name
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
  event.target.querySelector('.form__button').setAttribute('disabled','')
  cardGrid.prepend(innerEL)

  close(popUpAdd)

  popUpAddForm.reset()
}
//---------------------------------------------------------------------------------------------------------------------------------------
// пререндер карточек из массива
initialCards.forEach((item)=>{
  const prerendered = createCard(item)
  cardGrid.append(prerendered)
})
//----------------------------------------------------------------------------------------------------------------------------------------
// эвент листенры и вызовы
formEditElement.addEventListener('submit', handleSubmitEditProfile); // отправление данных в шапку профиля
cardFormElement.addEventListener('submit', handleCreateCardFromForm)
buttonOpenEditProfile.addEventListener('click', openEditForm)
buttonAddNewCard.addEventListener('click', openAddButton)
//----------------------------------------------------------------------------------------------------------------------------------------
