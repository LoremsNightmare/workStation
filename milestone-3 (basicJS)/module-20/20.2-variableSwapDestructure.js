let numOne = 10;
let numTwo = 20;
let numThree
console.log('line One', numOne , numTwo);

//swap way one
//one = 20; two = 10; 
numThree = numTwo;
numTwo = numOne;
numOne = numThree;

console.log('line Two', numOne , numTwo, numThree);

//swap way Two

let num1 = 100;
let num2 = 200;
console.log('line three', num1, num2);
[num1, num2] = [num2, num1];
console.log('line four', num1, num2)
