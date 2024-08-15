//Arrays are one of the data structure
//Ways of declaring an Array

const box1 = ['pen', 'pencil', 'rubber', 'scale'];
console.log(box1)
console.log(box1[0]);
//Array is mutable even when it is declared by const
box1[3] = 'sharpner';
console.log(box1)

const box2 = new Array('ball', 'bat', 'stumps');
console.log(box2);


//Array methods
console.log('-----push------')//pushes an element at the end of the array

box1.push('blackpen')
//push method returns the length of the new array
console.log(box1.push('bluepen'))
console.log(box1);


console.log('-----unshift------') //pushes an element at the start of the array

box1.unshift('Greenpen')
//push method returns the length of the new array
console.log(box1.unshift('ledpencil'))
console.log(box1);


console.log('-----pop------') //removes element from the end
box1.pop()
console.log(box1.pop());
console.log(box1);


console.log('-----shift------')//removes element from the start
box1.shift()
console.log(box1.shift());
console.log(box1);


console.log('-----indexOf------')// return the index number of the element mentioned in the parameter.
console.log(box1.indexOf('rubber'))


console.log('-----includes------')//check if the mentioned element is present in the array or  not
console.log(box1.includes('pen'))
console.log(box1.includes('eraser'))


console.log("-----------Looping an Array--------------");
console.log("-----------For Loop--------------");

const newArray = ['bala', 25, 'nodejs dev', '30 days', true, 100000];
const arr = []

for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i])
    arr.push(typeof newArray[i])
}
console.log(arr)

//While loop is used when we dont know how many time we need to loop an array..
console.log("-----------While Loop--------------");
let i = 0;
while (i < newArray.length) {
    console.log(newArray[i])
    i++;
}


let dice = Math.floor(Math.random() * 6) + 1
console.log(dice)

while (dice !== 6) {
    console.log(`${dice} dice number`)
    dice = Math.floor(Math.random() * 6) + 1
}


//continue and break;
//continue is to exit the current iteration of the loop and continue to the next one.
console.log("-----------Continue--------------");

for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] !== 'string') continue;
    console.log(newArray[i])

}

//break is used to terminate the whole loop
console.log("-----------Break--------------");

for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] === 'boolean') break; //here when the iteration reaches boolean.. the loop terminates.
    console.log(newArray[i])

}


