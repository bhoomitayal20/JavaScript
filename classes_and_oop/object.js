function multiplyBy5(num){
    this.num=num;
    return num*5;
}

multiplyBy5.power=2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
//javascript m hr chiz object hoti h
function createUser(username,score){
    this.username=username;
    this.score=score;

}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
const chai=new createUser('chai',25)
const tea=createUser('tea',250)
 chai.printMe()