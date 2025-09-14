const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        
    }
    
}
user.welcomeMessage();
user.username='sam'
user.welcomeMessage();
//we can use this concept of this in object only
const chai=()=>{
    let username='bhoomi';
    console.log(this.username);
    
}
chai()
//arrow function
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));
//const addTwo=(num1,num2)=>(num1+num2) another way of writing
const addTwo1=(num1,num2)=>({username:"hitesh"})
console.log(addTwo1(3,4));