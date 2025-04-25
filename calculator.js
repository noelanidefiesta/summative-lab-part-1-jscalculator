// Calculator History Array 
let calculationHistory = [];

// Function to add 
function add(num1, num2) {
  const result = num1 + num2;
  addToHistory(num1, num2, '+', result);
  return result;
}

// Function to subtract 
function subtract(num1, num2) {
  const result = num1 - num2;
  addToHistory(num1, num2, '-', result);
  return result;
}

// Function to multiply 
function multiply(num1, num2) {
  const result = num1 * num2;
  addToHistory(num1, num2, '*', result);
  return result;
}

// Function to divide 
function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Error: Cannot divide by zero.");
    return null;
  }
  const result = num1 / num2;
  addToHistory(num1, num2, '/', result);
  return result;
}

// Function to add calculation to history
function addToHistory(operand1, operand2, operator, result) {
  const calculation = {
    operand1: operand1,
    operand2: operand2,
    operator: operator,
    result: result
  };
  calculationHistory.push(calculation);
}

// Function to display history
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations yet.");
  } else {
    console.log("Calculation History:");
    calculationHistory.forEach((entry, index) => {
      console.log(
        `${index + 1}: ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`
      );
    });
  }
}