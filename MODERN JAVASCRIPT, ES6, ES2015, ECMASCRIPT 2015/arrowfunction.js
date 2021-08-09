const myage = () => 5;
console.log(myage()); // 5

const sum = (x,y=0) => x + y
console.log(sum(5, 6)); // 11

const hello = () => "Hello World!";

console.log(hello());


const calculator = (x,y) => {
    return x - y
}

console.log(calculator(5,3));