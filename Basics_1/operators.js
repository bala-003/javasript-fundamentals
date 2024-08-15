//types of operaters are, Arithmatic operator, Mathematical operator,Assignement operators, logical operator.
console.log("-----------------------------------------");

//Mathematical operators
let num1 = 10
let num2 = 10
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log("-----------------------------------------");

//Assigment operator
let x = 10 + 5;


console.log(x += 10);
console.log(x *= 10);
console.log(x /= 10);
console.log(x -= 10); //x= 15
console.log(x++); //return the value first and increment.. so output is 15
console.log(x--);// in next log..previous values is increment so output here is 16
console.log(x);//in next log.. previous values is decrement so output is 15
console.log("-----------------------------------------");

//Comparison operator
let i = 10;
let j = 12;

console.log(i === j);
console.log(i > j);
console.log(i < j);
console.log(i >= j);
console.log(i <= j);


//Equality operator
console.log("-----------------------------------------");

let age = 18;
console.log(age === 18);
console.log(age == 18);
console.log('18' === 18); // compares datatype and the vaue
console.log('18' == 18); // compares only the value


console.log("-----------------------------------------");


//Logical Operator

let imGood = true;
let iLoveJava = false;
console.log(imGood && iLoveJava);
console.log(imGood || iLoveJava);
console.log(!imGood);

console.log("-----------------------------------------");


//Conditional Operator (Ternary Operator)
let someAge = 21

someAge >= 18 ? console.log('Youre are an adult') : console.log("Youre not!!");
someAge <= 18 ? console.log('Youre are an adult') : console.log("Youre not!!");


let allowed = someAge >= 18 ? 'allowed' : "not allowed";
console.log(allowed);


console.log("-----------------------------------------");



//Pre-increment drecement, Post- increment , decrement practise
let k = 10;
k++ //10
console.log(k--); //11
++k; //10 -> 11
console.log(k++); //11
--k; //12 -> 11
console.log(k) //11



// let a = 5;
// let b = 10;
// let result = ++a + b++ - --a + a-- + b--; //6+ 10 - 5 + 5 +11


// let x = 3;
// let y = 7;
// let z = 2;

// let result = x++ + ++y * --z - z-- + ++x * y-- + (x++ + --y); //3 +8 * 1- 1+ 5 *8 +(5 + 6)
//3+8-1+40+11
//61

let a = 4;
let b = 8;
let c = 6;

let result = --a + ++b * (c-- / --a) + b-- + ++c - a++ * b--;

console.log(result)
//3 +9 *(6/2) +9 + 6 - 2*8
//30+15-16
//29
