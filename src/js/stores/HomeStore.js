import { observable } from "mobx"


class HomeStore {
  @observable value = 0;
  @observable timeNow = new Date().toLocaleString;
  @observable persons = [];
  @observable isLoaded = false;
  
  increment = () => {
    this.value++;
  }

  decrement = () => {
    this.value--;
  }

  reset = () => {
    this.value = 0;
  }
}

export default new HomeStore

