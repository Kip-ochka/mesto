export default class UserInfo {
  constructor(editInputs){
    this._editInputs = editInputs
    this._name = editInputs.name
    this._job = editInputs.job
  }

  getUserInfo(){
    this._profileData = {
      name: this._name.textContent,
      job: this._job.textContent
    }
    return this._profileData
  }
  setUserInfo(obj){
    this._name.textContent = obj.name
    this._job.textContent = obj.job
  }

}
