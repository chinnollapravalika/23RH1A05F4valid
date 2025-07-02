let arr=[1,2,3,"p"];
console.log(arr);
for(let val of arr){  //splitting elements
    //console.log(val);
    if(val%2==0){
        console.log(val);
    }
}
arr.push(30);
console.log(arr);
arr.pop(30);
console.log(arr);