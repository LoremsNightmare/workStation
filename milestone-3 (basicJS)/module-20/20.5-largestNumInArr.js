let num = [12,432,45,567,64,64,2,35,7,8,34,43,6654,76];

function largest(arr){
  let num = arr[0]
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element> num){
      num = element
    }
  }
  return num
}

let res = largest(num);
console.log(res)