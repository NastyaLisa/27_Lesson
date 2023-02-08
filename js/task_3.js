//Task 3
console.log("Task 3");

function count(expression) {
  function getValues(expression) {
    let values = [...expression];
    return values;
  }

  let values;

  try {
    let data = Values(expression);
    data = values;
  } catch (error) {
    if (typeof expression !== "string") {
      console.log("Error : Expression is not iterable");
    } else {
      console.log(error.name + ": " + error.message); // wrong error
    }
    values = [0, "+", 0];
  }

  function showResult(value) {
    return value;
  }

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

console.log(count("5-2"));
console.log(count(5 - 2));
