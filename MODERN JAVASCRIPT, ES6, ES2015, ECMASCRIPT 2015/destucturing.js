const student = {
    name : 'Rabiul Hasan',
    age : 23,
    data : {
        mobile: 01859443458,
        address: 'Dhaka, Bangladesh'
    }
}
let n = student.name;
console.log(n);
const { name, age, ...work } = student;

const {mobile, address} = student.data;
console.log(mobile)