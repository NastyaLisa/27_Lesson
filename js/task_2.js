//Task 2.0
console.log("Task 2.0");

function count(expression) {
  let values = [...expression];

  switch (values[1]) {
    case "+":
      return showResult(sum(values));
    case "-":
      return showResult(subtract(values));
    case "*":
      return showResult(multiply(values));
    case "/":
      return showResult(divide(values));
  }
}
function sum(values) {
  return +values[0] + +values[2];
}
function subtract(values) {
  return +values[0] - +values[2];
}
function multiply(values) {
  return +values[0] * +values[2];
}
function divide(values) {
  return +values[0] / +values[2];
}

function showResult(value) {
  try {
    if (value !== Infinity) {
      return value;
    } else {
      throw new TypeError(`Error("Can't devided by 0")`);
    }
  } catch (error) {
    console.log(error.stack);
  }
}
console.log(count("5-2"));
console.log(count("5*2"));
console.log(count("5+2"));
console.log(count("5/0"));
