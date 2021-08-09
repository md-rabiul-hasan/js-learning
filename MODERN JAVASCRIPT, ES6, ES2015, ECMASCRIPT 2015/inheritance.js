class Parent{
    constructor(){
        this.fathername = 'Islam'
    }
}

class Child extends Parent{
    constructor(name) {
        super()
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

const child = new Child('hasan');
console.log(`My name is ${child.name} ${child.fathername}`)