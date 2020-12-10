import { observable } from "mobx"


class DataStore {

  @observable persons = [];
  @observable isLoaded = false;
  
}

export default new DataStore

