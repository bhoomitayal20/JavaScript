const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.map((num)=>num+10)
//const newNums=myNums.map((num)=>{ return num+10}) we nned to write return if we add curly braces
console.log(newNums);
const newNums1=myNums
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num>=40)
console.log(newNums1);
//map m sab value return hoti h and filter m condition true values return hoti hai
