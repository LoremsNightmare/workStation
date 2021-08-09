//১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি  লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 

let jString = 'hello';
let jBoolean = false;
let jNumber = 12;


//২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 

let realLove = 1;
const fixedLove = 'real';
realLove = 100;

//৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

let jmNumOne = 10;
let jmNumTwo = 20;
let jmNumThree = 32;
let jmNumFour = 42;
let jmNumFive = 52;
let jmNumSix = 62;

let jmResOne = jmNumOne + jmNumTwo;
let jmResTwo = jmNumThree - jmNumFour;
let jmResThree = jmNumFive * jmNumSix;
let jmResFour = jmNumOne / jmNumTwo;

console.log(jmResOne,jmResTwo,jmResThree,jmResFour);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়,  অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

let jmComOne = jmNumOne < jmNumTwo; // true
let jmComTwo = jmNumTwo > jmNumThree; // false
let jmComThree = jmNumFive == jmNumFour; // false
let jmComFour = jmNumSix != jmNumTwo; //true
let jmComFive = jmNumThree <= jmNumSix; // true
let jmComSix = jmNumOne >= jmNumFour; // false

console.log('4noProb', jmComOne,jmComTwo,jmComThree,jmComFour,jmComFive,jmComSix)


//৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

let jmAgeOne = 12;
let jmAgeTwo = 10;
let jmAgeThree = 100;
let jmAgeFour = 10;

if(jmAgeOne < jmAgeTwo && jmAgeThree > jmAgeFour ){
    console.log('problem 4 done');
}
if(jmAgeOne < jmAgeTwo || jmAgeThree < jmAgeFour ){
    console.log('problem 4 done');
}

//৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে  পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

let jmLoveOne = 'love';
let jmLoveTwo = 'valobasha';

if(jmLoveOne.length == jmLoveTwo.length){
  console.log('if a dukse');
}else{
  console.log('else a gese no 6');
}

//৭.  তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। না পারলে এই ভিডিও দেখো:  17_5-3 More while loops, odd numbers, even numbers

let jmWhile = 7;
while(jmWhile<=19){
  if(jmWhile%2 != 0){
    console.log(jmWhile);
  }
  jmWhile++
}

//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 


let jmArr = [12,23,34,45,56,67];
jmArr[3] = 'fortyFive'
jmArr.push(100,1000);
let jmPoped = jmArr.pop();
console.log(jmArr, jmPoped);

if(jmArr.indexOf(34) != -1){
  console.log('34 ase');
}else{
  console.log('34 nai');
}

//৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

let jmForOne = [13,14,15,16,16,16,73,457,85,85,7,45];
let jmFortwo = [130000,14,54,73,86,46,87,65,74,44,74,73];

for(let i=0;i<jmForOne.length;i++){
  let element = jmForOne[i];
  console.log(element);
}

for(let each of jmFortwo){
  console.log(each);
}

//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

let jmForthree = [130000,14,54,73,86,46,87,65,91,89,74,44,74,73];

for(let each of jmForthree){
  if(each > 80){
    console.log('no10',each);
  }
}

//১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

function jmMultiply(one,two,three){
  return one*two*three
}
console.log('11 no',jmMultiply(2,3,4));

//১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

let jmPerson = {
  name: 'bulsara',
  age: 24,
  height: '5 feet 9 inch',
}

let jmProp = 'age';
jmPerson["name"] = 'zain';
jmPerson[jmProp] = 200;
jmPerson.height = '6 feet 1 Inch';
console.log('no12:', jmPerson );