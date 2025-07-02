//using tradition function
function findOddOrEven(no){
    if(no%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
//using arrow function
const OddOrEven=(no)=>{
    if(no%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
findOddOrEven(15);
OddOrEven(20);