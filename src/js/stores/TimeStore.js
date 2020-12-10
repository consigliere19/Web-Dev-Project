import { observable } from "mobx"


class TimeStore {

  @observable timeNow = new Date().toLocaleString;
  
}

export default new TimeStore

