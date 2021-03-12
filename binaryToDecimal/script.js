
/* User can enter up to 8 binary digits in one input field - Complete using maxlength attribute
 User must be notified if anything other than a 0 or 1 was entered - Complete by iterating over the string, if any digits are less than zero or greater than one, an alert is displayed
 User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered */

const input = document.getElementById('binary');

let inputInt;

const button = document.getElementById('convertButton')

const answerDisplay = document.getElementById('solution');
const validateNums = function () {
    inputInt = input.value;
    for(digit of inputInt){
        let parsedDigit = parseInt(digit);
        if(parsedDigit < 0 || parsedDigit > 1) {
            alert("Please only use 0's and 1's")
        return 
        }
        
    }
    convertBinary();
}

const convertBinary = function () {
    let counter = 0
    let total = 0
 for(let i = input.value.length - 1; i >= 0; i--){
     let convertedDigit = input.value[i] * (2 ** counter)
     total += convertedDigit;
     counter++;
   

 }
 answerDisplay.textContent = `${input.value} in decimal form is equal to ${total}`;
}

button.addEventListener('click', (event) => {
    event.preventDefault();
})

button.addEventListener('click', validateNums);
