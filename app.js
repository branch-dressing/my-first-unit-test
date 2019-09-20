function testNumber() {
    const numberInput = document.getElementById('number-input');
    const resultParagraph = document.getElementById('result');

    const number = parseInt(numberInput.value);

    console.log(number);
    
    function isEven(number) {
        const rem = number%2
        if (rem === 0) {
            return true;
        } else {
            return false
        }
    }

    console.log(isEven())

    
}


window.testNumber = testNumber;