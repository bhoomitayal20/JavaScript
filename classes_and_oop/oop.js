//object literal
const user={
    username:"hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
    console.log("got user details from database");
    console.log(`username: ${this.username}`);
    console.log(this);
    }
   // this->current context
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//empty parenthesis in node environment
//constructor function:gives new instances

function User(username,loginCount,isLoggesIn){
   this.username=username
   this.loginCount=loginCount;
   this.isLoggedIn=this.isLoggedIn;
   this.greeting=function(){
    console.log(`welcome ${this.username}`);
   }
   return this//not necessary to write
}
const userOne= new User('hitesh',12,true);
const userTwo=new User("chai or code",11,false)
console.log(userOne.constructor);
console.log(userTwo)
//new keyword- an empty object is created then constructor function is called then this keyword k andar inject hojate h


