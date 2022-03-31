function subtract(number1, number2) {
  return number1 - number2;
}

const number1 = parseFloat(prompt("enter a number"));
const number2 = parseFloat(prompt("Enter another number"));
const result = subtract(number1, number2);
alert(result);