const numbers = [1, 2, 3];

const newNumbers = [numbers, 4];
console.log(newNumbers);
// [[1, 2, 3], 4]

const newNumbers = [numbers, 4];
console.log(newNumbers);
// [1, 2, 3, 4]

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson)
// [object Object] {
//     age: 28,
//     name: 'Max'
// }

const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(fileter(1, 2, 3))
// [1]
