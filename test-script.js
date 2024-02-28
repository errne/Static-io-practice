let number1 = null;
let number2 = null;

function updateNumber(buttonNumber) {
    let buttonId = "button" + buttonNumber;

    if (document.getElementById(buttonId).disabled) {
        return;
    }

    if (buttonNumber === 1) {
        number1 = Math.floor(Math.random() * 42) + 60;
        document.getElementById('number1').innerText = number1;
    } else if (buttonNumber === 2) {
        number2 = Math.floor(Math.random() * 42) + 60;
        document.getElementById('number2').innerText = number2;
    }

    document.getElementById(buttonId).disabled = true;
}

function resetNumbers() {
    document.getElementById('button1').disabled = false;
    document.getElementById('button2').disabled = false;

    number1 = null;
    number2 = null;
    document.getElementById('number1').innerText = '?';
    document.getElementById('number2').innerText = '?';
}

// Export functions for testing
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { updateNumber, resetNumbers };
}
