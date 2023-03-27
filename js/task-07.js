const fontSizeControlInputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector('#text');

fontSizeControlInputEl.addEventListener('input', onSizeControlChange);

function onSizeControlChange (event) {
 textEl.style.fontSize = fontSizeControlInputEl.value + "px";
}
