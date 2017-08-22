import { observable, autorun } from 'mobx';
import { hslToRgb, comp, quadratic, triadic, invertRgb, splitComp, saturation, rgbToHsl, rgbToHex } from './lib/color-switch';

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
  @observable hsl = new Array(3);
  @observable triadic = []
  @observable quadratic = []
  @observable splitComp = []
  @observable saturation = []
};


var store = window.store = new ObservableAppStore();
export default store;



autorun(() => {
  store.inverseRgb.red = invertRgb(store.rgb.red);
});
autorun(() => {
  store.inverseRgb.green = invertRgb(store.rgb.green);
});
autorun(() => {
  store.inverseRgb.blue = invertRgb(store.rgb.blue);
});
autorun(() => {
  store.hsl = rgbToHsl(store.rgb.red, store.rgb.green, store.rgb.blue);
});
autorun(() => {
  store.hex = rgbToHex(store.rgb.red, store.rgb.green, store.rgb.blue);
});
autorun(() => {
  store.inverseHex = rgbToHex(store.inverseRgb.red, store.inverseRgb.green, store.inverseRgb.blue);
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
