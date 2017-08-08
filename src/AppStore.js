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
  @observable hex = '#FFFFFF';
};


var store = window.store = new ObservableAppStore();
export default store;

function rgbToHex(red, green, blue) {
  var rgb = [red, green, blue];
  var hex = [];
  for (let i = 0; i < 3; i++) {
    hex.push(Number(rgb[i]).toString(16));
    if (hex[i].length < 2) {
      hex[i] = "0" + hex[i];
    }
  };
  return '#' + hex.join("");
};

function invertRgb(rgb) {
  return (rgb - 255) * -1
}

autorun(() => {
  store.inverseRgb.red = invertRgb(store.rgb.red)
})
autorun(() => {
  store.inverseRgb.green = invertRgb(store.rgb.green)
})
autorun(() => {
  store.inverseRgb.blue = invertRgb(store.rgb.blue)
})
autorun(() => {
  store.hex = rgbToHex(store.rgb.red, store.rgb.green, store.rgb.blue)
})
autorun(() => {
  store.inverseHex = rgbToHex(store.inverseRgb.red, store.inverseRgb.green, store.inverseRgb.blue)
})
