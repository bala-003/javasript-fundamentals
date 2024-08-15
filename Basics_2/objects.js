//Objects are another datastructure used to store data in key-value pairs..
console.log('------Object creation-------')

const obj = {
    name: 'bala',
    age: 25,
    job: 'nodejs dev',
    exp: 3,
    skills: ['nodejs', 'reactjs', 'mongodb', 'mysql']
}

console.log(obj);
console.log(obj.age);
console.log(obj['exp']);

//difference between Dot and bracket notation is that in brackets we can put any expression
// which can be calculated from some other operation.

//To add new property in the object

console.log('------To add new property in the object-------')
obj.noticePeriod = `30 days`;
console.log(obj);
obj['Expected_ctc'] = '10 lpa';
console.log(obj);

const message = `${obj.name} has ${obj.skills.length} skills and he does well in ${obj.skills[0]}`
console.log(message);

//Object Methods

console.log('------Object Methods-------')
const newObj = {
    name: 'kick',
    age: 25,
    days: 90,
    job: 'reactjs dev',
    exp: 5,
    skills: ['nodejs', 'reactjs', 'mongodb', 'mysql'],
    calc: function (np) {
        return `${this.days - np} days`;
    },
    getLicence: function () {
        console.log(this.age >= 18 ? 'haslicence' : 'not having licence');
    }
}

console.log(newObj.calc(30));
console.log(newObj['calc'](40));

const text = `${newObj.name} is ${newObj.age} years old and ${newObj.getLicence()}`


