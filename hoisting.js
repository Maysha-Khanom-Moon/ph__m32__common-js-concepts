/**
 * ---------------- hoisting -----------------
 * ==> Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
 * 
 * ==> that's why we can access any of these function before declaration
 * 
 * ==> but, not take the initialization or right side part of declaration
 * 
 * ==> that's why we can access the variable(var) before initialization but not getting the value
 * 
 * ==> let or const can accessed after declaration also inside the own block
 * 
 * 
 * ------------- var vs let ------------
 * ==> var go with the hoisting
 * ==> let do not go with hoisting
 * 
 * ==> var global or function scoped
 * ==> let block scope ---> also scope start from it's declaration and end-up with it's block
 */


console.log(a); // we can access the variable but not the value

var a = 6;