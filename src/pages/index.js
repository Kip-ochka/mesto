import './index.css';
import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {buttonOpenEditProfile,
  popUpEditProfile,
  cardGrid,
  buttonAddNewCard,
  popUpAdd,
  profileJobTextContent,
  profileNameTextContent,
  popUpPreview,
  config,
  initialCards} from '../utils/variables.js'


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
const editInputs = {name:profileNameTextContent, job:profileJobTextContent}
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

function handleSubmitEditProfile (userData) {
  userInfo.setUserInfo(userData)
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
  popupEdit.setInputValues(userInfo.getUserInfo())
  openEditPopup()
})
buttonAddNewCard.addEventListener('click', ()=> {
  formValidators['addcard'].resetValidation()
  openAddCardPopup()
})
