//Task 2.1
console.log("Task 2.1");

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
    console.log(error.message);
    return 0;
  }
}

console.log(count("5/0"));
