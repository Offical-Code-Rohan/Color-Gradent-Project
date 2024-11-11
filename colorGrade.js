let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copycode");

let rgb1 = "#06405e";
let rgb2 = "#cfdbce";

const hexValues = () => {
  let myHexaValues = "0123456789abcdef";
  let colors = "#";
  for (i = 0; i < 6; i++) {
    colors = colors + myHexaValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handleButton1 = () => {
  rgb1 = hexValues();
  btn1.style.backgroundColor = rgb1;
  btn1.innerText = rgb1;
  copyDiv.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  copyDiv.innerHTML = `background-images: linear-gradient(to right,${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
  rgb2 = hexValues();
  btn2.style.backgroundColor = rgb2;
  copyDiv.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  btn2.innerText = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-images: linear-gradient(to right,${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.innerText);
  alert(copyDiv.innerText);
});
