
function factorial(number){
  let factorial = 1;
  let i=1;
  while(i<=number){
    factorial = factorial * i;
    i++
  }
  console.log(factorial);
}
factorial(7)

// reverse while

function factorialOne(number){
  let factorial = 1;
  let i = number;
  while(i>=1){
    factorial = factorial * i
    i--;
  }
  console.log(factorial);
}
factorialOne(7)


// reverse for

function factorialTwo(number){
  let factorial = 1;
  for(let i=number; i>=1;i--){
    factorial = factorial * i
  }
  console.log(factorial);
}

factorialTwo(7)