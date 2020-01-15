"use strict"

let sum=0;
let n=1000;
 for(let i = 0; i<1000;i++){

    if(i%3===0 || i%5===0){
        sum+=i;
    }
 }


 console.log(sum)