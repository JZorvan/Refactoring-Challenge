'use strict';

let html = '';

const randomHue = () => {
  return Math.floor(Math.random() * 256 );
}

const colorString = () => {
  let color = 'rgb(';
  color += randomHue() + ',';
  color += randomHue() + ',';
  color += randomHue() + ')';
  return color;
}

const print = (message) => {
  document.write(message);
}

for (let i = 0; i < 100; i++) {
  let rgbColor = colorString();
  html += `<div style="background-color:${rgbColor}">&nbsp</div>`;
}
  
print(html);
