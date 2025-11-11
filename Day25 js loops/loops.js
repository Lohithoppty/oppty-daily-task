

//Sum of Number from 1 to 20.
console.log("             Sum of Number from 1 to 20:");

let n = 20; 
let sum = 0;

for( i=0; i<=n; i++){
    sum = sum + i; 
  //  console.log("count:", sum);  // if you remove comments output: shows step by step count from 1 to 20.
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

let R = 10;

for(R=10; R>=1; R--){
    console.log("count:", R); // output: shows step by step Reverse Countdown from 10 to 1.
   }



//Checking stock availability until quantity run out.
console.log("               Checking Stock Availability until quantity run out:");

 let stock = 9;                  
console.log("Stock Available:", stock); 
 let customer = 1;
console.log("Customer Taken:",customer); 

    while(stock >= 0) {   
       console.log("Customer " + customer + " bought 1 item");  stock = stock - 1;
       console.log("Remaining Stock:" + stock);
        customer++;
      }
 
 console.log("Run Out Of Stock");
 

