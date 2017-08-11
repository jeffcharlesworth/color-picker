import { observable, autorun } from 'mobx';

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

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
};

function invertRgb(rgb) {
  return (rgb - 255) * -1
};

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
