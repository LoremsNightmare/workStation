let laptop = {
  brand: 'Apple',
  chip: "M1",
  storage: '256gb',
}

// get property
let propertyName = "brand"
let way1 = laptop.brand;
let way2 = laptop['brand'];
let way3 = laptop[propertyName];

console.log(way1, way2, way3);

// set property

let newProperty = 'year';

laptop[newProperty] = 2021; 
laptop['year'] = 2022; 
laptop.year = 2023; 

console.log(laptop);