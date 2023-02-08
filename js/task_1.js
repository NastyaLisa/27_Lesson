//Task 1
console.log("Task 1");

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
  return value;
}

console.log(count("5-2"));
console.log(count("5*2"));
console.log(count("5+2"));
console.log(count("5/2"));