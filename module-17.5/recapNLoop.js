let nums =13;
let items = ['olodama', "lasengan", 'delo', 'lelu'];


// console.log(items);


if(items.length <= 2){
  console.log( `too many items`);
}else{
  items.push('olodama lasenngannnn')
}
// console.log(items);

// let i=1;
// while(i<7){
//   console.log(i);
//   i++;
// }


// odd/even with while 
let even = [];
let odd = [];

let num = 1;

while(num <20){
  if(num%2 != 0){
    odd.push(num)
  }else{
    even.push(num)
  }
  num++
}

// console.log('result: ',odd);
// console.log('result: ',even);


let bags = ['books', 'notebook', 'laptop', 'lelu']

for(let i=0;i < bags.length;i++){
  console.log(bags[i]);
}
