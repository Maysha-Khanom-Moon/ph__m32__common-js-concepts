const first = 2;
const second = '2';

if(first == second) {
    console.log(`values are equal`);
}
else {
    console.log(`values are not equal`);
}


/**
 * ------------ '===' -------------
 * ===> checked value and type both
 * ==> '1' and 1 not equal
 * ==> ture and 1 not equal
 * 
 * 
 * ----------- '==' -----------
 * ===> just check the value
 * ===> also, do
 *              - type coercion
 *              - type conversion
 *              - type casting
 * 
 * ==> type coercion: the process of automatic or implicit conversion of values from one data type to another
 *  
 * ==> '1' and 1 are equal
 * ==> ture and 1 are equal
 * 
 * 
 * ------------------- '==' or '===' -------------------
 * ==> primitive just check the value and type
 * ==> non-primitive check the reference not the value or type
 */