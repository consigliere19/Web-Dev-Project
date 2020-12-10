import { observable } from "mobx"
import { CURRENCIES } from "../currencies";

class CurrencyStore {

  @observable fromCurrency = CURRENCIES[0].currency;
  @observable toCurrency = CURRENCIES[0].currency;
  @observable baseAmount = 0
  @observable multiplier = 1;
  @observable result = 0;

}

export default new CurrencyStore