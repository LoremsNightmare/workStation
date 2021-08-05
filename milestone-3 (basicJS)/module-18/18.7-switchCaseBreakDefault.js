let day = 1;

switch (day) {
  case 1:
    console.log('saturday');
    break;
  case 2:
    console.log('sunday');
    break;
  case 3:
    console.log('monday');
    break;
  case 4:
    console.log('tuesday');
    break;
  case 5:
    console.log('wednesday');
    break;
  case 6:
    console.log('thursday');
    break;
  case 7:
    console.log('friday');
    break;

  default:
    console.log(` dhur beta, ${day}- aita ki day naki!!`);
    break;
}


// ex 2 

let fruit = 'papaya';

switch (fruit) {
  case 'mango':
  case 'orange':
    console.log('mango or orange both 2.00 pound');
    break;
  case 'papaya':
    console.log('papaya free');
  break;
  default:
    console.log('not available');
    break;
}