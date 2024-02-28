/**
 * -------------- Truthy --------------
 * 1. true
 * 2. any number(+ve, -ve) except 0
 * 3. any string
 * 4. empty object or object
 * 5. empty array or array
 * 
 * -------------- Falsy --------------
 * 1. false
 * 2. number = 0
 * 3. empty string = ''
 * 4. undefined
 * 5. null
 */


const x = false;

if(x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}



/**
 * ------ check falsy ------
 * ==> !falsy ---> true
 */