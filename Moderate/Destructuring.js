const arr = [1, 2, 3, 4, 5]

const [x, y, , , z] = arr;
console.log(x, y, z);


const obj = {
    name: "balaji",
    role: "web  dev",
    age: 25,
    job: true,
    skills: ['nodejs', 'reactjs', 'mongoDB', 'mysql']
}
const { name: firstName, age: birthAge, skills } = obj
const [mainSkill] = skills

console.log(firstName, birthAge, mainSkill);

for (const key of Object.keys(obj)) {
    console.log(key);
}

for (const value of Object.values(obj)) {
    console.log(value);
}
const newObj = {}
for (const [i, value] of Object.entries(obj)) {
    newObj[i] = value
}

console.log(newObj);

newObj = { ...newObj, skills: [...newObj.skills, 'oracle'] }

console.log(newObj);








