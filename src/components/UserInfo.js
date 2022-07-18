export default class UserInfo {
  constructor(editInputs){
    this._editInputs = editInputs
    this._name = editInputs.name
    this._job = editInputs.job
  }

  getUserInfo(){
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }
  setUserInfo(userData){
    this._name.textContent = userData.name
    this._job.textContent = userData.job
  }

}
