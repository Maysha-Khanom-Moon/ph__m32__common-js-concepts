/**
 * ==> Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function
 * 
 * ==> A closure is a function having access to the parent scope, even after the parent function has closed
 */

function kitchen() {
    let roast = 0;

    // closure
    return function() {
        roast++;

        return roast;
    }

    /**
     * -------- another way --------
     * ==> it's called nested function
     * 
     * function add() {roast++;}
     * add();
     * return roast;
     * 
     * ==> but ai function ta bahir thekeo call kora jabe, ja amra chacchi nah!
     * ==> so, encapsulation(private variable) er jonno we used closure. so, outer function er reference thekei shudhu matro inner function ta call kora jabe.
     */
}

const firstServer = kitchen(); // ekhan theke return hoye thaklo amr inner function ta. so, firstServer hoye gelo inner function. And inner function er jonno roast er value-o remain thakbe.

console.log(firstServer());
console.log(firstServer());
console.log(firstServer());


const secondServer = kitchen();
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());