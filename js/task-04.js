let counterValue = 0;

const decrementButtonEl = document.querySelector(`[data-action = "decrement"]`);
const incrementButtonEl = document.querySelector(`[data-action = "increment"]`);
const value = document.querySelector('#value');

decrementButtonEl.addEventListener('click', onDecrementButtonClick);
incrementButtonEl.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick (event) {
    value.textContent = `${counterValue -= 1}`;
}

function onIncrementButtonClick (event) {
    value.textContent = `${counterValue += 1}`;
}