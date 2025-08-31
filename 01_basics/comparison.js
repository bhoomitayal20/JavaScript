console.log(null>0)
console.log(null==0)
console.log(null>=0)
//equality check and comparison operator work differently.comparison convert null to a number treating it as 0 thats why null>=0->true and null>0 is false
//if we write undefined in place of null every output will be false
console.log("2"===2);