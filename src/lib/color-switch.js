export function hslToRgb(h, s, l){
    var r, g, b;
    h = h/360
    s = s/100
    l = l/100


    if(s === 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function rgbToHex(red, green, blue) {
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

export function rgbToHsl(r, g, b){
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max === min){
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

export function inverse(h, s, l) {
  var first = [h, s,l]
  var second = [h - 180, s, l]
  return [first, second]
};

export function saturation(h, s, l) {
  var first = [h, s , l]
  var second = [h, (s * .75), l]
  var third = [h, (s * .50), l]
  var fourth = [h, (s * .25), l]
  var fifth = [h, (s * .0), l]
  return [first, second, third, fourth, fifth]
}

export function triadic(h, s, l) {
  var first = [h, s , l]
  var second = [h -240, s , l]
  var third = [h -120, s , l]

  return [first, second, third]
}

export function quadratic(h, s, l) {
  var first = [h, s , l]
  var second = [h - 270, s , l]
  var third = [h - 180, s , l]
  var fourth = [h - 90, s , l]

  return [first, second, third, fourth]
}

export function splitComp(h, s, l) {
  var first = [h, s , l]
  var second = [h - 120, s , l]
  var third = [h - 150, s , l]
  var fourth = [h - 180, s , l]

  return [first, second, third, fourth]
}

export function compTwo(h, s, l) {
  var first = [h - 324 * -1 , s, l]
  var second = [h - 288 * -1 , s, l]
  var third = [h - 252 * -1 , s, l]
  var fourth = [h - 216 * -1 , s, l]
  var fifth = [h - 180 * -1 , s, l]
  var sixth = [h - 144 * -1 , s, l]
  var seventh = [h - 108 * -1 , s, l]
  var eighth = [h - 72 * -1 , s, l]
  var nineth = [h - 36 * -1 , s, l]

  return [first, second, third, fourth, fifth, sixth, seventh, eighth, nineth]
}
