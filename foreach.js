var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function callback(element,index,array){
  if(element%3===0){
      array[index]+=100;
  }
  })
  
console.log(test);


// output:add 100 to elements of array which are divisible by 3
//[112,
// 929,
// 11,
// 103,
// 199,
// 1000,
// 7,
// 1,
// 124,
// 37,
// 4,
// 19,
// 400,
// 3775,
// 299,
// 136,
// 209,
// 148,
// 169,
// 299,
// 106,
// 109,
// 20,
// 58,
// 139,
// 59,
// 103,
// 1,
// 139 ]