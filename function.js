function welcomeMessage(){
    console.log("Welcome to MRECW");
}
function add(a,b){
    return a+b;
}
const mul=(a,b)=>(a*b); //with parameters
console.log(mul(5,5));

const greet=()=>("Hello");  //without parameters
console.log(greet());
welcomeMessage();
console.log(add(10,20));