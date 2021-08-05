// addition

function addition(numOne, numTwo){
  let res = numOne + numTwo;
  return `addition res: ${res}`
}

//substraction
function substraction(numOne, numTwo){
  let res = numOne - numTwo;
  return `substraction res: ${res}`
}
//multiply
function multiply(numOne, numTwo){
  let res = numOne * numTwo;
  return `multiply res: ${res}`
}
//divide
function divide(numOne, numTwo){
  let res = numOne / numTwo;
  return `divide res: ${res}`
}


let resOne = addition(12,2);
let resTwo = substraction(12,2);
let resThree = multiply(12,2);
let resFour = divide(12,2);

console.log(resOne);
console.log(resTwo);
console.log(resThree);
console.log(resFour);