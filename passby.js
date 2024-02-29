let num1 = 4, num2 = 6;

function change(a, b) {
    a = 10;
    b = 20;
}

change(num1, num2);
console.log(num1, num2);
/**
 * ------ primitive: pass by value(copy) -----
 * ==> so if we change the parameters then no change is happed outside the function
 */


let laptop1 = {price: 120000, brand: 'hp', id: 5};
let laptop2 = {price: 80000, brand: 'lenovo', id: 3};

function changeLaptop(laptop) {
    laptop.price = 90000;
}

changeLaptop(laptop1);
console.log(laptop1);
/**
 * ------ non-primitive: pass by reference(memory) -----
 * ==> so if we change the parameter then change will happed outside the function
 */