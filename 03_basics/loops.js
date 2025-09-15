//for loop
for (let index = 1; index <=10; index++) {
    if(index==5){
        console.log('detected 5');
        // break;
    continue;
    }
    console.log(`value of i is ${index}`);
    }
    //HIGHER ORDER ARRAY LOOPS
    //FOR OF LOOP
    const arr=[1,2,3,4]
    for(const num of arr){
        console.log(num);
        }
        //maps:key value pairs in order and no duplicate values
        const map=new Map()
        map.set('IN',"india")
        map.set('usa',"united states of america")
       // console.log(map);
       for (const [key,value] of map) {
        console.log(key);
         }
        //object
        const myObject={
            'game1':'nfs',
            'game2':'spiderman'
        }
       // for (const key of myObject) {
          //  console.log(key);}
             //objects are not iterable in for of loop

for (const key in myObject) {
    console.log(myObject[key]);
}
const programming=['js','rb','py','java','cpp']
for (const key in programming) {
    console.log(key);
    }
    //in for in loop indexes will be printed in key and in for of loop elemnts will be printed
    for (const key in map) {
       console.log(key);
    }//not iterable
    programming.forEach(function greet(val){
        console.log(val);
        
    } 
        
    );
   programming.forEach((item,index,arr)=> {
    console.log(item,index,arr);
 })
 programming.forEach(element => {
    console.log(element);
    
 });