//Type Conversion is we explicitly convert the datatype of value to another datatype.
//Type coercion is javascript implicitly converts the datatype behind the scence.

//Type Coercion

let year = '1999'
console.log(year + 25); // implicitly datatype is converted while adding(+) a string and a number

year = 1999;
console.log(1999 - '9');//implicitly datatype is converted while subracting(-) a number  and a string


year = 1999;
console.log(1999 / '10');

year = 1999;
console.log(1999 * '10');

//Type Conversion
let months = '10'
console.log(Number(months));
console.log(String(25));
console.log(Number('balaji'));


//Truthy and falsy value

//falsy values are 0, "", null, undefined, NaN, false;
//other than falsy values.. rest are truthy values.

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(" "))
console.log(Boolean({}))
