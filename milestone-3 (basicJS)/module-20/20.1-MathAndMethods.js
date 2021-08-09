

let myNum = -5;

// Math.abs()
let makePossitive = Math.abs(myNum);
console.log(makePossitive);

//Math -> floor, ceil, random, round

let num = 21.5012121212;

let floor = Math.floor(num);
let round = Math.round(num);
let ceil = Math.ceil(num);
let random = Math.random();
console.log(floor,round,ceil,random);

//genarate 1-6 random number

let sixArr = [];
let otherArr = [];
for(let i=0;i<200;i++){
  let oneToSix = Math.ceil(Math.random()* 6) ;
  // console.log(oneToSix);
  if(oneToSix == 6){
    sixArr.push(oneToSix);
  }else{
    otherArr.push(oneToSix)
  }

}
console.log(sixArr)
console.log(otherArr)