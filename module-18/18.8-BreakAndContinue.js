/*

//break in while
let i = 0;
while(i<10){
  if(i==5){
    break;
  }
  // console.log(i);
  i++;
}


//break in for loop

for(let i=0;i < 10;i++){
  console.log(i); //5
  if(i==5){
    break;
  }
  console.log(i); //4
}

*/

// continue keyword (skip typer bepar)


let num = [12,23,45,57,789,45,3,423,4,65,7687,543];

for (let i = 0; i < num.length; i++) {
  const element = num[i];
  if(element > 10){ // 10 er noro ja ase shob SKIP hoi jabe... 
    continue;
  }
  console.log(element);
}
