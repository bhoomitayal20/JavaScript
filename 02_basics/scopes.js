let a=300

if(true){
let a=10
console.log("inner a",a);
const b=20
var c=30
}
console.log(a)
function one(){
    const username='hitesh'
    function two(){
        const website='youtube'
        console.log(username);
        
    }
    //console.log(website);
    two()
    //child function can access parent function variables but parent function cannot access child function variables
}
one()
//expression
const addOne=function(num){//in this type of function declaration we cannot call it before declarration
    return num+2
}
//addOne(5)
console.log(addOne(5));
console.log(addTwo(7));//we can call function before declarration here
function addTwo(num){
    return num+2;
}