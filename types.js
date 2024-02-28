/**
 * ------- strongly typed language -------
 * int a = 5;
 * string b = 'alim halim khalim';
 * bool c = True;
 * object student = {name: 'noya daman' id: 55}
 * 
 * ==> must have to say the type of value when we declare the variable.
 * 
 * ==> c++, java, c, etc.
 */


/**
 * --------- dynamic typed language ---------
 * 
 * ==> no need to mention the value type when we declare the variable.
 * 
 * ==> python, javaScript, etc.
 */


// primitive --> null, undefined also
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const c = true;
console.log(typeof a, typeof b, typeof c);

// non-primitive 
const ages = [45, 65, 48];
const student = {id: 23, class: 7};

console.log(typeof ages, typeof student);



// ------- reasign -------
// primitive --------> work as copy --> value
let x = 5;
let y = x;
console.log(x, y);

y = 7;
console.log(x, y);


/*
* non-primitive --------> work as reference --> memory
* 
* we can understand it when we change it partially
* 
* when we fully reasign it, then it refer another memory point
 */

let p = {job: 'web development'};
let q = p;
// fully reasign it, so it refer another memory
q = {job: 'Backend'}; 
console.log(p, q);

let r = q;
// partially change, so it refer same memory
q.job = 'frontend';
console.log(r, q);