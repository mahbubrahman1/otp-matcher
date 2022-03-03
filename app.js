// generate pin section
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

// all number button section
document.getElementById('button-key').addEventListener('click', function (event) {
    const clickedNumber = event.target.innerText;
    const displayNumber = document.getElementById('display-number');
    if (isNaN(clickedNumber)) {
        if (clickedNumber == 'C') {
            displayNumber.value = '';
        }
    } else {
        const previousDisplayNumber = displayNumber.value;
        const newDisplayNumber = previousDisplayNumber + clickedNumber;
        displayNumber.value = newDisplayNumber;
    }
})

// verify pin
function verifyPin() {
    const generatePin = document.getElementById('display-pin').value;
    const clickedNumber = document.getElementById('display-number').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if (generatePin == clickedNumber) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    } else {
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}







//====================== practice ================
/* 
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
 */