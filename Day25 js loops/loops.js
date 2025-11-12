

//Sum of Number from 1 to 20.
console.log("             Sum of Number from 1 to 20:");

let n = 20; 
let sum = 0;

for( i=0; i<=n; i++){
    sum = sum + i; 
  // console.log("count:", sum);  // if you remove comments output: shows step by step count from 1 to 20.
  }
console.log("count:", sum);     // output: shows last iteration count is 120.



//Sum of even Number, 1 to 50.
console.log("           Sum of Even Number from 1 to 50:");

let Num = 50; 
let even = 0;

for( i=0; i<=Num; i++){
    if(i%2==0){
      even = even + i;  
    }
   // console.log("count:", even); // if you remove comments output: shows step by step count from 1 to 50.
    
 }
console.log("count:", even);       // output: shows last iteration count is 650.



//Reverse Countdown 10 to 1.
console.log("            Reverse Countdown from  10 to 1:");

let r = 10;

for(r=10; r>=1; r--){
    console.log("count:", r); // output: shows step by step Reverse Countdown from 10 to 1.
   }



//Checking stock availability until quantity run out.
console.log("               Checking Stock Availability until quantity run out:");

 let stock = 5;
      
     while(stock > 0){
      console.log("Selling item.... Remaining Stock:", stock);
      stock--;
    }
console.log("Run Out Of Stock");
 

