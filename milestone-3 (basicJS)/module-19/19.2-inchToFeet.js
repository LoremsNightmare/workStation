function inchToFeet(inch){
  return inch/12; 
}

let dadaFeet =inchToFeet(123);
console.log(dadaFeet);

let dadiFeet =inchToFeet(240);
console.log(dadiFeet);

let myDate = new Date();
console.log(myDate);

// mile to kilometer
let myMile = 0.621371;
function kilometerToMile(kilo){
  let myKilo = kilo * 0.621371
  return myKilo
}
let res1 = kilometerToMile(2)
console.log(res1);