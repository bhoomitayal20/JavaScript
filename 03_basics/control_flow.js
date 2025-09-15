// if statement
const isUserLoggedIn=true;
if(isUserLoggedIn){
    //body of if loop will be executed only 'if' condiition is true 

}
//conditional operators ==,!=,>,<,<=,>=,===(checks type also)
else{
    //if 'if' statement doesn't execute 
}
const score=200
if(score>100){
    const power='fly'
    console.log(`user power: ${power}`)
    }
const balance=1000;
if(balance<500) {
    console.log('less than');
    
}
else if(balance<750){
    console.log('less than 750');
    
}
else if(balance<900){
    console.log('less than 900');
    
}
else{
    console.log('less than 1200');
    
}

const userLoggedIn=true
const debitCard=true
if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy course");
    }
//switch statement ek value ko multiple conditions s check krna h
const month=3;
switch (month) {
    //copy pasted using shift+option+down arrow
    case 0: 
    console.log("january");
    break;
    case 1: 
    console.log("february");
    break;
    case 2: 
    console.log("march");
    break;
    case 3: 
    console.log("april");
    break;
    case 4: 
    console.log("may");
    break;
    case 5: 
    console.log("june");
    break;
    case 6: 
    console.log("july");
    break;
    
    default:
        console.log('enter valid month');
        
        break;
}

