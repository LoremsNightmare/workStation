/*

1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
6! = 6 * 5 * 4 * 3 * 2 * 1
7! = 7 * 6!

n! = n * n-1


*/

function factorial(n){
  if(n==0){
    return 1
  }
  return n * factorial(n-1)
}

let res = factorial(9);
console.log(res);