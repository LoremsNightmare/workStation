// 01 variable
let skyColor = 'blue';
// 02 array 
let phones = ['lg', 'apple', 'motorolla', 'xiaomi', 'samsung'];

// check if not available
if(phones.indexOf('oppo') == -1){
  console.log('not available');  
}

//check if available
if(phones.indexOf('apple') != -1){ // 
  console.log('available');
}

//03 loop 

let i=0;
while(i< 10){
  console.log(i);
  i++
}

for (let i = 0; i < phones.length; i++) {
  const element = phones[i];
  console.log(element);
}

// function 

function addThreeNums(num1, num2, num3){
  return num1+num2+num3
}

let sum = addThreeNums(10,10,10);
console.log('sum: ', sum);