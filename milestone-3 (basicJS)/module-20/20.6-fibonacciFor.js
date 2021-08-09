//0 	1 	1 	2 	3 	5 	8 	13 	21 	34 	55 	89 	144

/*
  3 = 2 + 2
  16 = 16-2 = 15 + 16-2= 14;
  n = n-1 + n-2 

*/


let fibo = [0,1];
for (let i = 2; i < 200; i++) {
  //n = n-1 + n-2
  fibo[i] = fibo[i-1] + fibo[i-2];
  
}
console.log(fibo);