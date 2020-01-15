"use strict"

let evens=[1,2];
let n=4000000;
let a=1;
let b=2;
let f=0;
let sum=0;
let evens2=[];
let sum1=0;



      for(let i=0;i<n&&f<n;i++){
 f=b+a;
 a=b;
 b=f;

 if(f<n){
      evens.push(f)
 }


 }

for(let i=0;i<evens.length;i++){
   if( evens[i]%2===0){
       evens2.push(evens[i]);
   }
}

  console.log(evens2);

    for(let i=0;i<evens2.length;i++){
         
        if(evens2[i]<4000000){
sum+=evens2[i]

        }
            
        
        
     }

     

console.log(sum);


