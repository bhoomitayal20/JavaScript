const userEmail='h@hitesh.ai'//if we add empty string here it is false but if we add empty array here it will be true why? AS EMPTY STRING IS FALSY VALUE
if(userEmail){
    console.log('got user email')
    
}
else{
    console.log('dont have useremail')
}
//truthy or falsy values
//falsy values : false,0,-0,BigInt 0n,"",null,undefined,NaN
//ELSE ALL ARE TRUTHY VALUES
//"0",'fALSE'," ",[],{},function(){}->TRUTHY VALUE
//how to check array is empty or not
const user_array=[]
if(user_array.length===0){
    console.log("array is empty");
    
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
}
//mullish coalescing operator(??):null undefined
let val1;
//val1=5??10
val1=null??10
console.log(val1);
let val2
val2=undefined??15
console.log(val2);

