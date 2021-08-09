let nums = [12,23,43,11,32,54,56,7600,9,78,98,56,1000];

let max = nums[0]
for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  if(element > max){
    max = element;
  }
  
}
console.log(max);


function getMin(arr){
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element < min){
      min = element
    }
  }
  return min
}

let minRes = getMin(nums);
console.log(minRes);

// tasks: math.max & math.min



function findMax(one, two, three){
  return Math.max(one,two,three)
}
function findMin(one, two, three){
  return Math.min(one,two,three)
}

let resFindMax = findMax(130,230,100);
console.log(resFindMax);
let resFindMin = findMin(130,230,100);
console.log(resFindMin);