function add(a, b) {
    // console.log(a, b);
    // a, b er scope ---> just ei function ---> function scope or global scope

    if(b > 5) {
        const sum = 25 + a + b;
        // sum er scope ---> just ei block ---> blocked scope
    }
    else {
        var sum = 1 + a + b;
        // but var --> hoisting kore dicchi --> function scope or global scope
    }

    console.log(sum);
}

add(3, 7); // undefined
add(7, 3); // via var sum --> so it become function scoped