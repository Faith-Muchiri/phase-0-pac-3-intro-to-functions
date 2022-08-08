// Follow along with the examples here
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
console.log("Hello, world!");
function doNothing(){

}
function sayHello(){
    console.log("Hello!");
}
sayHello();

function sayHelloToIsabel(){
    console.log("Hello, Isabel!");
}
sayHelloToIsabel();

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }
  sayHelloToSofia();
 
  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }
  sayHelloToBrendan();

  //
sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

//Arguments and parameters
function doSomething(thing){
    console.log(thing);

}
doSomething("nothing");

function sayHelloTo(firstName){
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Isa");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

// function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`);
//   }
  
//   sayHelloTo("Isabel"); // "Hello, Isabel!"
//   sayHelloTo("Jane"); // "Hello, Jane!"
//   sayHelloTo("R2-D2"); // "Hello, R2-D2!"
//   sayHelloTo(1); // "Hello, 1!"
// console.log(firstName);
function say(greeting, firstName){
    console.log(`${greeting}, ${firstName}!`);
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye","Julio");
say("Julio", "hello");


//return value in Javascript
function add(x,y){
    return x+y;
}
console.log(add(1,2));
console.log(add(80,9000));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log("Hello","Sofia");

  console.log(say("Hello", "Sofi"));

  function sum(x, y) {
    return x + y;
  }
  console.log(sum(4, 2));
  function addition(num1, num2){
    return num1+num2;
  }
  console.log(addition(3,8));

//   //encapsulation
// const sum = add(num1, num2);
// const message = `The sum of your numbers is: ${sum}.`;
// const msg = `The sum of your numbers is: ${add(num1, num2)}.`;
// add(7,7);

//
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));

  function saay(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }