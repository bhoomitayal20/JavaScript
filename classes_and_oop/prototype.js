let myName='hitesh    ';
//console.log(myName.truelength);
console.log(myName.trim().length);
let myHeros=['thor','spiderman'];
let heroPower={
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower: function(){
        console.log(`spidy power is &{this.spiderman}`);

    }
}
Object.prototype.hitesh=function(){
    console.log('hitesh is present in all objects');
}
Array.prototype.heyHitesh=function(){
    console.log('hitesh says hello');
}
myHeros.hitesh();
myHeros.heyHitesh();
//inheritance
const user={
    name:'chai',
    email:"chai@google.com"
}
const teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:teachingSupport
}
teacher.__proto__=user
//modern syntax
Object.setPrototypeOf(teachingSupport,teacher)
  

let anotherUsername='chaiaurcode.  '
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`)

}
anotherUsername.trueLength()