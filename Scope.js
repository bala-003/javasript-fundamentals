// const myName = "bala";
// const decade = 2;

// var millenial = 5;
// function first(millenial) {
//     const age = 30;

//     console.log(millenial);

//     if (age >= 30) {
//         const decade = 3;
//         console.log(millenial);

//         var millenial = true;

//     }




//     function second(millenial) {
//         const job = 'teacher';
//         console.log(`${myName}`);
//         console.log(millenial);
//         console.log(decade);


//     }

//     second(millenial)
// }

// first(millenial)

// console.log("----------------- VAR---------------------------");

// function outerFunction() {
//     var outerVar = 'I am outside!';

//     function innerFunction() {
//         console.log(outerVar); // What will this log?
//     }

//     innerFunction();
// }

// outerFunction();

// console.log("----------------- VAR---------------------------");


// // for (var i = 0; i < 3; i++) {
// //     setTimeout(function () {
// //         console.log('var loop:', i); // What will this log?
// //     }, 1000);
// // }

// // console.log("----------------- LET---------------------------");

// // for (let j = 0; j < 3; j++) {
// //     setTimeout(function () {
// //         console.log('let loop:', j); // What will this log?
// //     }, 1000);
// // }


// console.log("----------------- blockScope---------------------------");

// function blockScope() {
//     if (true) {
//         var x = 'var variable';
//         let y = 'let variable';
//         const z = 'const variable';
//     }

//     console.log(x); // What will this log?
//     // console.log(y); // What will this log?
//     // console.log(z); // What will this log?
// }

// blockScope();

// console.log("----------------- functionScope---------------------------");



// function functionScope() {
//     var a = 'outer var';
//     let b = 'outer let';
//     const c = 'outer const';

//     if (true) {
//         var a = 'inner var';
//         let b = 'inner let';
//         const c = 'inner const';

//         console.log(a); // What will this log? //inner
//         console.log(b); // What will this log?  //inner
//         console.log(c); // What will this log?  //inner
//     }

//     console.log(a); // What will this log?  //inner
//     console.log(b); // What will this log?  //outer
//     console.log(c); // What will this log?   //outer
// } functionScope();

// console.log("----------------- hoisting---------------------------");




// console.log(a); // What will this log?
// var a = 10;

// // console.log(b); // What will this log?
// // let b = 20;

// // console.log(c); // What will this log?
// // const c = 30;

// console.log("----------------- shadowing---------------------------");
// var globalVar = 'global var';
// let globalLet = 'global let';

// function shadowing() {
//     var globalVar = 'local var';
//     let globalLet = 'local let';
//     console.log(globalVar); // What will this log? // local var
//     console.log(globalLet); // What will this log? //local var
// }

// shadowing();
// console.log(globalVar); // What will this log? // global var
// console.log(globalLet); // global let


// console.log("----------------- Temporal dead zone---------------------------");


// function tdzExample() {
//     console.log(myVar); // What will this log?
//     // console.log(myLet); // What will this log?

//     var myVar = 'Declared with var';
//     // let myLet = 'Declared with let';
// }

// tdzExample();


// console.log("----------------- outer Function---------------------------");

// function outerFunction() {
//     var outerVar = 'I am the outer variable';
//     let outerLet = 'I am the outer let variable';

//     function innerFunction() {
//         console.log(outerVar); // What will this log? //I am the outer variable
//         console.log(outerLet); // What will this log? //'I am the outer let variable

//         var innerVar = 'I am the inner variable';
//         let innerLet = 'I am the inner let variable';

//         function deepestFunction() {
//             console.log(innerVar); // What will this log?  //'I am the inner variable
//             console.log(innerLet); // What will this log?  //I am the inner let variable
//             console.log(outerVar); // What will this log?  //I am the outer variable
//             console.log(outerLet); // What will this log?  //'I am the outer let variable
//         }

//         deepestFunction();
//     }

//     innerFunction();
// }

// outerFunction();
// console.log("----------------- IIFE---------------------------");


// var x = 10;

// (function () {
//     console.log(x); // What will this log? //undefined
//     var x = 20;
//     console.log(x); // What will this log? //20
// })();

// console.log(x);  //10
// console.log("----------------- Closures---------------------------");


// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(`let loop: ${i}`); // What will this log and why? 0,1,2
//     }, 1000);
// }

// for (var j = 0; j < 3; j++) {
//     setTimeout(function () {
//         console.log(`var loop: ${j}`); // What will this log and why? //3,3,3
//     }, 1000);
// }

// console.log("----------------- hoisting---------------------------");


// console.log(foo); // What will this log?  //undefined
// console.log(bar()); // What will this log?  //Hello bar

// var foo = 'Hello, foo!';

// function bar() {
//     return 'Hello, bar!';
// }

// (function () {
//     console.log(foo); // What will this log?  //undefined
//     console.log(bar()); // What will this log?  //inner bar

//     var foo = 'Inner foo!';
//     function bar() {
//         return 'Inner bar!';
//     }
// })();
// console.log("----------------- obj---------------------------");


// const obj = {
//     value: 100,
//     regularFunction: function () {
//         console.log(this.value); // What will this log? //100
//     },
//     arrowFunction: () => {
//         console.log(this.value); // What will this log?  // undefined
//     },
//     nestedFunction: function () {
//         const innerArrowFunction = () => {
//             console.log(this.value); // What will this log? // 100
//         };
//         innerArrowFunction();
//     }
// };

// obj.regularFunction();
// obj.arrowFunction();
// obj.nestedFunction();



// const arrowfunction = () => {
//     console.log(this); // What will this log?  // undefined
// }

// function arrow() {
//     console.log("function declaration", this.value);

// }


// const arrows = function () {
//     console.log("function expression", this.value);

// }

// arrowfunction()
// arrow();
// arrows()

// var funcs = [];

// for (var i = 0; i < 3; i++) {
//     funcs[i] = (function (x) {
//         return function () {
//             console.log(x); // What will this log?
//         };
//     })(i);
// }

// funcs[0](); // What will this log?
// funcs[1](); // What will this log?
// funcs[2](); // What will this log?


// let a = 15;

// function outerFunction() {
//     let a = 20;
//     console.log(a); // What will this log?

//     function innerFunction() {
//         let a = 30;
//         console.log(a); // What will this log?

//         function deepestFunction() {
//             console.log(a); // What will this log?
//         }

//         return deepestFunction;
//     }

//     const deepFunc = innerFunction();
//     deepFunc();
// }

// outerFunction();
// console.log("hi", a); // What will this log?



const a = 1;

{
    const a = 2;
    {
        const a = 3;
        console.log(a); // What will this log?
    }
    console.log(a); // What will this log?
}

console.log(a); // What will this log?