/**
 * ------------- callback function -------------
 * ==> Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function
 * 
 * ==> we can pass callback function as argument and it's just a reference no parentheses
 */

function greeting(person) {
    console.log(person);
}

const name = 'Halim mama';
greeting(name);

const nums = [33, 53, 66];
greeting(nums);

const laptop = {price: 65000, brand: 'lenovo', memory: '8gb'}
greeting(laptop);


// we can pass a function as argument
// callback function
function callGreeting(call, greet) {
    call(greet);
}
callGreeting(greeting, 'moon');


// again
function greetHandler(name) {
    console.log(`Good morning ${name}`);
}
callGreeting(greetHandler, 'moon');

// we can use same function to call various function and excute