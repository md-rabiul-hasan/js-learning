const m = [1,2,3,4]
const n = [5,6,7]
const mn = m.concat(n);
console.log(mn);

let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

let a = [1,2,3]
let b = [3,4]
let c = [...a,5,7,...b]
console.log(c) // [ 1, 2, 3, 5, 3, 4 ]


const user1 = {
    name: 'Jen',
    age: 22
};
  
const clonedUser = { ...user1 };
console.log(clonedUser);


function hello(x,y,...b){
    console.log(b);
}

hello(4,5,6,7,8,9,70)