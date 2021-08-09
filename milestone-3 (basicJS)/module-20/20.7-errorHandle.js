



function fibonacchi(num){
/*   if(typeof num == 'string'){
    return 'give number'
  }else if(typeof num == 'object'){
    return 'give Number'
  } */
  if(typeof num != 'number'){
    return 'number dao'
  }else if(num < 0){
    return 'possive number needed'
  }
  let fibo = [0,1];
  for(let i=2;i<num;i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(i);
  }
  return fibo;
}

let res = fibonacchi(-12);
console.log(res)
console.log(typeof [12,12,23,43,12])