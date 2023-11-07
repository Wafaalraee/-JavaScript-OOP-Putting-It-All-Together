//Exercise 1 

//A- Classes
//Create a class called `Person` with the following properties and methods:

//1 - Properties:

 //`name` (string)
// `age` (number)

//Pseudocode
//1- use the class keyword to define a class named Person
//2- creat new instance of the class, two parameters(name and age) using constructor method
//3-use `this` inside constructor and set name(string) and age(number) properties

class Person {
 constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//example

const person1 = new Person("Hana", 30);
const person2 = new Person("Ahmed", 25);

console.log(person1.name); 
console.log(person2.age);  


//B - Methods:

 //introduce()`: This method should return a string introducing the person,
  //for example: "Hi, my name is John and I am 25 years old."
//Psuedocode
//1-class definition
//2-introduce method
//3-using the class
//4-calling the introduce method
//5-logging the introduction

  class Person3 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  const person4 = new Person3("Sam", 30);
  const introduction = person4.introduce();
  console.log(introduction);

  //Exercise 2 - This
//Create a new object using the `Person` class you defined in Exercise 1.
// Name the object `person1` and set the `name` and `age` properties accordingly.
 //Then, create a function called `describePerson` that takes a callback function as an argument.
 // Inside the `describePerson` function, call the callback function with `person1` as the `this` context.


 // Step 1: Create a new Person object and set its properties
const person5 = new Person("John", 25);

// Step 2: Define the describePerson function with a callback
function describePerson(callback) {
  // Step 3: Call the callback function with person1 as the this context
  callback.call(person5);
}

// Example callback function
function displayIntroduction() {
 console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

// Call describePerson with the callback
describePerson(displayIntroduction);


//Exercise 3 - Promises
//Write a function called `wait` that takes a number as an argument (representing milliseconds) and returns a Promise.
// The Promise should resolve after the given number of milliseconds, using `setTimeout`.
// The resolved value can be anything you choose.
//Psuedocode

//define function called wait(milliseconds)
// Create a new Promise
// Set up a timer using setTimeout
// Resolve the Promise after the specified time
//end setTimeout
//calling the function
// Return the Promise
//end function
//log it


function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved after " + milliseconds + " milliseconds"), milliseconds);
  });
}

// Usage example:
wait(2000)
  .then((result) => {
    console.log(result); // This will be printed after 2 seconds
  })
  .catch((error) => {
    console.error(error);
  });


  //Exercise 4 - Submission Instructions
//Create an HTML file and a corresponding JavaScript file to complete the assignment.
// Implement the tasks in the JavaScript file and include it in the HTML file using the `<script>` tag.
// Test your code thoroughly, ensuring that each task is working correctly. Save both files and submit them together.

console.log(person4.introduce());
describePerson(function () {
  console.log(this.introduce());
}.bind(person4));

