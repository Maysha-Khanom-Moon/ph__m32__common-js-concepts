// here: a, b, c ---> parameter
function sum(a, b, c) {

    /**
     * ------------ arguments -------------
     * ==> array like object
     * ==> keys are like indexing
     * 
     * 
     * --------- array like object to array -------
     * ==> we can do it because arguments iterable, but other objects are not iterable as like array indexing
     * 
     * const args = [...arguments];
     * 
     * 
     * ==> only can access inside the function
     */
    console.log(arguments);
    console.log(typeof arguments);
    console.log(arguments['0'], '\n');

    // array like object to array
    const args = [...arguments]
    console.log(args);

    const result = a + b + c;
    return result;
}

// arguments: 23, 63, 10
const total = sum(23, 63, 10);
console.log(total, '\n');

const add = sum(4, 3, 6, 77, 8, 5);
console.log(add);