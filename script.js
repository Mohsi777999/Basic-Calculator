let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.getElementById("display");

function appendNumber(number) {
  currentNumber += number;
  display.innerText = currentNumber;
}

function appendOperator(op) {
  if (currentNumber === "") return;
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display.innerText = "";
}

function calculate() {
  if (currentNumber === "" || previousNumber === "") return;

  let result;
  const prevNum = parseFloat(previousNumber);
  const currNum = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = prevNum + currNum;
      break;
    case "-":
      result = prevNum - currNum;
      break;
    case "*":
      result = prevNum * currNum;
      break;
    case "/":
      // Fix: handle division by zero
      if (currNum === 0) {
        display.innerText = "Error: Division by zero";
        return;
      }
      result = prevNum / currNum;
      break;
  }

  currentNumber = result.toString(); // Convert result to string for display
  previousNumber = "";
  operator = "";
  display.innerText = currentNumber;
}
