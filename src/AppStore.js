import { observable, autorun } from 'mobx';
import { quadratic, triadic, inverse, splitComp, saturation, rgbToHsl, rgbToHex, textContrast } from './lib/color-switch';

class ObservableAppStore {
  @observable rgb = {
    red: 0,
    green: 0,
    blue: 0
  };
  @observable inverse = [];
  @observable hex = '#FFFFFF';
  @observable hsl = new Array(3);
  @observable triadic = [];
  @observable quadratic = [];
  @observable splitComp = [];
  @observable saturation = [];
};


var store = window.store = new ObservableAppStore();
export default store;

function createGradient(colorOne, colorTwo) {
  return "linear-gradient(to bottom, " + colorOne + " 0%, " + colorTwo + " 100%)";
}

function changeHandle(color) {
  var handles = document.getElementsByClassName('slider-handle');
  for(var i = 0; i < handles.length; i++) {
    handles[i].style.backgroundImage = createGradient(store.hex, store.hex);
    handles[i].style.backgroundColor = createGradient(store.hex, store.hex);
  }
}


autorun(() => {
  store.inverse = inverse(store.hsl[0], store.hsl[1], store.hsl[2])
});
autorun(() => {
  store.hsl = rgbToHsl(store.rgb.red, store.rgb.green, store.rgb.blue);
});
autorun(() => {
  store.hex = rgbToHex(store.rgb.red, store.rgb.green, store.rgb.blue);
});
autorun(() => {
  store.triadic = triadic(store.hsl[0], store.hsl[1], store.hsl[2]);
});
autorun(() => {
  store.splitComp = splitComp(store.hsl[0], store.hsl[1], store.hsl[2]);
});
autorun(() => {
  store.quadratic = quadratic(store.hsl[0], store.hsl[1], store.hsl[2]);
});
autorun(() => {
  store.saturation = saturation(store.hsl[0], store.hsl[1], store.hsl[2]);
});
autorun(() => {
  changeHandle(store.hex)
});
