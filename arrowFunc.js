function printMyName(name) {
    console.log(name);
}
printMyName('Max');


const printMyName = name => {
    console.log(name);
}
printMyName('Max');

const printMyName = (name) => {
    console.log(name);
}
printMyName('Max');

const multiply = (number) => number * 2;
console.log(multiply(2))

const multiply = (number) => {
    return number * 2;
};
console.log(multiply(2))
