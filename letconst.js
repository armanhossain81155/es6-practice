let sum = 0;
for (var i = 0; i <= 10; i++) {
sum = sum + i;
}
// console.log(i);

// arrow function
const doubleIt = num => num * 2;
const addNum = (x, y = 50) => x + y;
// const result = addNum(5);
// console.log(result);

//three dots rules
const ages = [ 15,  20, 25, 30];
const ages1 = [ 10, 20, 30, 40];
const ages2 = [ 36, 42, 78, 15];
const allAges = [...ages, ...ages1, 345,  ...ages2]
// console.log(allAges);
 
const goldDigger = [450, 550, 650, 750, 850, 950];
const maximum = Math.max(...goldDigger);
// console.log(maximum);

//class related discussion 
class Parent{
    constructor(fatherName){
        this.fatherName = "Schwerznegger";
    }
}
class child extends Parent {
constructor(name){
    super();
    this.name = name;
}
}
const getName = new child("arnold")
const getName1 = new child("tom")
console.log(getName);
console.log(getName1);
