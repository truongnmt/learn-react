class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    gender = 'female';
    name = 'Max';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();