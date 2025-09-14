function calculateCartPrice(...num1){
return num1;
}
console.log(calculateCartPrice(200,400,500))
//as we applied rest(spread) operator in the function it returns an array
const user={
    username:"bhoomi",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)
const myNewArr=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
