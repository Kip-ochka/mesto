export default class UserInfo {
  constructor(editInputs){
    this._editInputs = editInputs
    this._name = document.querySelector(editInputs.name)
    this._job = document.querySelector(editInputs.job)
  }

  getUserInfo(){
    return {
      profilename: this._name.textContent,
      job: this._job.textContent
    }
  }
  setUserInfo(userData){
    this._name.textContent = userData.profilename
    this._job.textContent = userData.job
  }

}
