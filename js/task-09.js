const colorChangeBtnEl = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);

colorChangeBtnEl.addEventListener('click', onColorChangeBtnClick)

function onColorChangeBtnClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();

  spanEl.textContent = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
