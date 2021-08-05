// diffrent ways to get odd even



function evenOrOdd(num){
  if(num%2 === 0){
    return `${num} is even`
  }
  return `${num} is odd`
}

let res1 = evenOrOdd(70);
console.log(res1);


// get all odd and even from ARRAY

let myNums = [12,13,14,15,16,17,18,19];

function arrOddEven(arr){
  for(let i=0;i<arr.length;i++){
    let element = arr[i]
    if(element%2 == 0){
      console.log(`${element} is even`);
    }else{
      console.log(`${element} is odd`);
    }
  }
}

arrOddEven(myNums);

// create a new arr of odd and even myNums

let myNums1 = [12,13,14,15,16,17,18,19];



function arrCreator(arr){
  let oddArr = [];
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element%2 == 0){
      evenArr.push(element)
    }else{
      oddArr.push(element)
    } 
  }
  return {oddArr, evenArr}
}
let res2 = arrCreator(myNums1);
console.log(res2);
console.log(res2['oddArr']);
console.log(res2.evenArr);


// outsite arr push hoisting

let myNums2 = [43,34,45,65,34,54,2345,76,432,76];

let oddArr = [];
let evenArr = [];
function arrCreator1(arr){
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element%2 == 0){
      evenArr.push(element)
    }else{
      oddArr.push(element)
    } 
  }
}

arrCreator1(myNums2);
console.log('odd:',oddArr);
console.log('even:',evenArr);






