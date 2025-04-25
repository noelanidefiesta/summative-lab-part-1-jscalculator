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

    // tests
    console.log(add(5, 2));         // 7
    console.log(subtract(10, 3));   // 7
    console.log(multiply(4, 6));    // 24
    console.log(divide(8, 2));      // 4
    console.log(divide(5, 0));      // Error

    // more tests
    console.log(add(2, 2));        // 4
    console.log(subtract(10, 5)); // 5
    console.log(multiply(3, 4));  // 12
    console.log(divide(12, 4));   // 3
    console.log(divide(10, 0));   // Error

    displayHistory();