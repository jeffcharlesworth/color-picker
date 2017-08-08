import { observable, action, autorun } from 'mobx';

class ObservableAppStore {
  @observable rgb = {
    red: 0,
    green: 0,
    blue: 0
  }
  @observable inverseRgb = {
    red: 0,
    green: 0,
    blue: 0
  }
};


var store = window.store = new ObservableAppStore();
export default store;

autorun(() => {
  store.inverseRgb.red = store.rgb.red - 255
})
autorun(() => {
  store.inverseRgb.green = store.rgb.green - 255
})
autorun(() => {
  store.inverseRgb.blue = store.rgb.blue - 255
})
