//fetch('').then().catch().finally();
const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network calls
    setTimeout(function(){
        console.log("async task is complete");
        resolve()//due to this staetement promise is consumed
    },1000)
});//promise formed
//no need of q or bluebird library now 
//consume promise after creating
//resolve ka connection hai .then() k sath
promiseOne.then(function(){
    console.log("promise consumed");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})
//third promise
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:'chai',email:'chai@example.com'})
    },1000)
})
promiseThree.then(function(user){
//how to take data from resolve
console.log(user);
//resolve k andar ke parameters miljayenge
})
//promise 4
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'hitesh',password:"123"})
        }
        else{
            reject('ERROR:Something went wrong')
        }

    },1000)
})
//consumption of promise four
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((myusername)=>{//chaining to get data from above 
    console.log(myusername);

})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolved or rejecetd")
})
//promise 5
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'javascript',password:"123"})
        }
        else{
            reject('ERROR:JS went wrong')
        }

    },1000)
});
//promiseFive.then(function(){

//})
async function consumePromiseFive(){
    try{
   const response= await promiseFive
   console.log(response);}
   catch(error){
    console.log(error);
   }
}
consumePromiseFive()

async function getAllUsers(){
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);
   }
catch(error){
    console.log("E:",error);
}
}
getAllUsers();
//how to do getAllUsers function using .then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>
    console.log(error))
 