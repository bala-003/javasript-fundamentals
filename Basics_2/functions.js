//function is a piece of code which can be used over and over again
// we can run , call or invoke a function
//Function is just a value we can store in a variable

//Function declaration

console.log('------------------------------')

function doSomething() {
    console.log(this)
    console.log('I did something')
}

// doSomething(); //this function doesn't return anything..just logging the message;
const x = doSomething();
console.log(x)

function calc(num1, num2) {
    return num1 + num2
}

const result = calc(2, 3);
console.log(result);
console.log('------------------------------')

//function expression

const exp = function () {
    return "nothing"
}
console.log(exp())

const dos = function (str) {
    return str
}
console.log(dos("something"))

console.log('------------------------------')


//Arrow Function is just a syntatic sugar of function expression

const years = (age) => {
    console.log(this)
    return age;
}
const res = years(25);
console.log(res);
