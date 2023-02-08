//Task 4
console.log("Task 4");

function MakeUsers(name, age) {
  this.name = name;
  this.age = age;
}
const user = new MakeUsers("Mike");
function showMovie(user) {
  try {
    if (user.age === undefined) {
      throw new SyntaxError("Age not determined");
    }

    if (user.age >= 18) {
      console.log("You can watch this movie");
    } else {
      console.log("Sorry, you are too young");
    }
  } catch (error) {
    console.log(error.message);
    user.age = prompt("Enter your age", "");
    showMovie(user);
  }
}
showMovie(user);
