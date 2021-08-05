
// year / 4
// year / 400
// year / 100


function leapYear(year){
  if((year % 4 == 0) && (year % 100 != 0)){
    console.log('leapyear');
  }else if(year % 400 == 0){
    console.log('leapyear');
  }else{
    console.log('not leapyear');
  }
}

leapYear(2100)

// another way
function myLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(myLeapYear(2100));