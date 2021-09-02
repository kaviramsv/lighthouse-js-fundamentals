function howManyHundreds(num){
  var rem=num%100;

  var w_rem=num-rem;

  var hunds=w_rem/100;
  
  return hunds;

}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
