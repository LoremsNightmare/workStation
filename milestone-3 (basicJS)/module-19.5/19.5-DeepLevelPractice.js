//variable
let myFan = 'indus';
const myFanPrice = 13;
//array
let homeScore = [12,34,45,765,4,32,365,46,5]
//loop
for(let i=0;i<3;i++){
  console.log(i,'for');
}

let myI = 0
while(myI<3){
  console.log('while', myI);
  myI++;
}

//conditionals with 6 symbol

//function



//leapyear

/*
  * 4 diye jabe 100 diye jabena
  *400 diye jabe
*/

function myLeapYear(year){
  if(year%4 ==0 && year % 4 != 0){
    console.log('leapYear');
  }else if(year % 400 == 0){
    console.log('leapyear');
  }else{
    console.log('not leap YEAR');
  }
}

let leap1 = myLeapYear(1600);
let leap2 = myLeapYear(2020);
let leap3 = myLeapYear(1700);





//odd even

let myMixedArr = [1,21,223,34,45,67,78,09,76,5,343,32];

let oddArr = [];
let evenArr = [];
function oddEvenFilter(arr){
  for(let i=0;i<arr.length;i++){
    let element = arr[i];
    if(element%2 == 0){
      evenArr.push(element)
    }else{
      oddArr.push(element)
    }
  }
}
oddEvenFilter(myMixedArr);
console.log(oddArr)
console.log(evenArr)

//factorial(while, loop)

let factorial = 1;
let nNum = 1;
while(nNum < 10){
  factorial = factorial * nNum
  nNum++
}
console.log(factorial);

let fact = 1;
for (let i = 1; i < 10; i++) {
  fact = fact * i
}
console.log(fact);


//new homework
//1. celcius to farenheit // formula: (1°C × 9/5) + 32 = 33.8°F
function celciusToFarenheit(celcius){
  let cal = 9/5;
  let result = (celcius * cal) + 32;
  return result
}
let ctf1 = celciusToFarenheit(10);
let ctf2 = celciusToFarenheit(20);
let ctf3 = celciusToFarenheit(230);
console.log(ctf1,'°F',ctf2,'°F',ctf3,'°F')
console.log(typeof ctf1);


//2. fahrenheit to celsius // Formula (32°F − 32) × 5/9 = 0°C // 32f = 0c

function fahrenheitToCelsius(fer = 32){
  // Formula (32°F − 32) × 5/9 = 0°C
  let cal = 5/9;
  return (fer - 32) * cal
}
let fTC1 = fahrenheitToCelsius(50);
let fTC2 = fahrenheitToCelsius(234);
let fTC3 = fahrenheitToCelsius(788);
console.log(fTC1,'°C', fTC2,'°C', fTC3,'°C')
//3. grade calculation

/*
  formula
  90 - 100 a+;
  80 - 89 a;
  70 - 79 a-;
  60 - 69 b;
  50 - 59 b-;
  33 - 49 c;
  0 - 32 f;
*/




function gradeIf(num){
  if(num >= 91 && num <=100){
    console.log('A+');
  }else if(num >=80 && num<=89){
    console.log('A')
  }else if(num >=70 && num<=79){
    console.log('A-')
  }else if(num >=60 && num<=69){
    console.log('B')
  }else if(num >=50 && num<=59){
    console.log('B-')
  }else if(num >=33 && num<=49){
    console.log('C')
  }else{
    console.log('fail')
  }
}

gradeIf(71)
gradeIf(21)
gradeIf(51)



function gradingSys(num){
  switch (num) {
    case 90:
    case 91:
    case 92:
    case 93:
        console.log('A+');
      break;
  
    default:
      console.log('must put number');
      break;
  }
}
let gradeRes = gradingSys(91);


// console.log(gradeRes)

//4. simple interest

/*
  formula:  Simple Interest= P x R x T ÷ 100, 
  where P = Principal, 
  R = Rate of Interest 
  and T = Time Period of the Loan/Deposit in years.
 */

  function interestCalc(principle,percent,time){
    // time = time * 365
    return (principle * percent * time) /100
  }

  let myInter = interestCalc(500000,10,5) 
  console.log(myInter,'/-');
  let myInter1 = interestCalc(200000,15,2) 
  console.log(myInter1,'/-');