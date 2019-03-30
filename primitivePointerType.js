const person = {
    name: 'Max'
};

const secondPerson = person;
console.log(secondPerson);
// ... name: "Max"

person.name = 'Manu';
console.log(secondPerson);
// ... name: "Manu"

