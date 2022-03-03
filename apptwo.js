function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const displayPin = getPin();
    document.getElementById('display-pin').value = displayPin;
}

document.getElementById('button-key').addEventListener('click', function (event) {
    const clickedNumber = event.target.innerText;
    const displayNumber = document.getElementById('display-number');
    const previousDisplayNumber = displayNumber.value;
    const newDisplayNumber = previousDisplayNumber + clickedNumber;
    displayNumber.value = newDisplayNumber;
})