/*
  *variable
  *array
  *object
  *conditionals
  *loop
  *function
*/

//variable

let name = 'olodama';
let age = 12;
let isWhite = true;

//array

let items = ['bag', 'mobile', 'laptop', 'iPad'];
items.push('pen','notepad');
console.log(items);
items.pop();
console.log(items);

//available or not 

if(items.indexOf('lenovo') == -1){
  console.log('not available');
}else{
  console.log('available');
}

// with .includes()

if(items.includes('macbook')){
  console.log('this item is available');
}else{
  console.log('item not available');
}

// object get and set 

let desktop = {
  brand: 'lenovo',
  storage: '256gb',
  isThin: false,
}

//get 
let brandProps = 'brand';

let way1 = desktop.brand;
let way2 = desktop['storage'];
let way3 = desktop[brandProps];

console.log(way1,way2,way3);

//set new props 

let yearProps = 'year';

desktop.year = 2021;
desktop['year'] = 2022;
desktop[yearProps] = 2023;

console.log(desktop);


// conditionals 

let myNums = [12,324,45,65,768,89,09,324,345,56,76,4,5,6,8,9,4,2]; 

if(myNums.length>10){
  console.log('large array');
}else{
  console.log('arr.length is much bigger');
}

// loop 

let i = 0;
while(i<3){
  console.log('while', i);
  i++
}

for(let i=0;i<2;i++){
  console.log('loop', i);
}


//switch

let year = 1995;

switch (year) {
  case 1995:
  case 1996:
  case 1997:
    console.log('golden age of computer');
    break;
  case 1998:
  case 1999:
    console.log('hail netscape');
  break
  default:
    console.log('the year is not available');
    break;
}

function add(num1, num2, func){
  let total = num1 +num2
  console.log(total);
  func(); //callback
}

function greet(){ //this will be called inside of a function
  console.log('hola hello');
}

add(12,10,greet)


//intro to let , const
let myPen = 'space pen';
const PI = 3.14;
console.log(myPen,',',PI);