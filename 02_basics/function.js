function addTwoNumbers(number1,number2){
    console.log(number1+number2);

}
addTwoNumbers(2,"3")
//parameters in function definition and argument in function call
const result=addTwoNumbers(5,6);
console.log("result:",result);//result:undefined
//as in the function it is printing number1+number2 not returning 
function addNo(num1,num2){
    let ans=num1+num2;
    return ans;
    console.log("bhoomi")//unreachable code after return statement
}
const ans=addNo(6,7)
console.log("ans:",ans);
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("bhoomi"))
console.log(loginUserMessage(""))//just logged in
console.log(loginUserMessage())//undefined just logged in 