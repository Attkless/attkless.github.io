function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  function changeColor() {
    const rgbBox = document.querySelector('.rgb-box');
    rgbBox.style.backgroundColor = getRandomRGB();
  }
  