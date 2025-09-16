const coding=['js','ruby','java','python','cpp']
const values=coding.forEach((item)=>{
    console.log(item);
    return //for each loop return nhi karta item values ko
    
})
console.log(values);
//another example
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>4)
//filter return krta h on basis of condition
const newNums1=myNums.filter((num)=>{
    return num>4})//if we use curly. braces we need to type return 
console.log(newNums);
console.log(newNums1);
//another way of using filter
const nums=[]
myNums.forEach((num)=>{
    if(num>4){
        nums.push(num)
    }
})
console.log(nums);


