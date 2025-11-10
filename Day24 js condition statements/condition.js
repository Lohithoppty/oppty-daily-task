
// Even or Odd: Write a program to check if a number is even or odd.
console.log("Even or Odd:");

let number = 7;              // Change Number to see Output:Is a Even number or Odd number.
console.log("Taken-Number:", number);
    if(number % 2 == 0) {
          console.log(number + "Is a even Number.");
     }else {
          console.log(number + " Is a odd Number.");
    }


/* Age Validator:
     o  “Child” if under 13
     o	“Teenager” if 13-19
     o	“Adult” if 20-59
     o	“Senior” if 60+*/

console.log("Age Validator:");
 let age = 10;               // Change Age to see Output: Age Validator.
console.log("Taken-Age:", age);     
  if(age < 13){
            console.log("Is a Child");  
        }else if(age >= 13 && age <= 19){ 
            console.log("Is a Teenager");
        }else if(age >= 20 && age <= 59){
            console.log("Is a Adult");
        }else if(age >=60 ){
            console.log("Is a Senior");
        }     
    else{
        console.log("Not Valid");   // If you don't mention Age Output: shows not valid. 
    }


/* Grade Calculator:
        Marks	              Grade
        90-100	               A+
        75-89	               A
        60-74	               B
        45-59	               C
        Below 45	      Fail*/

console.log("Grade Calculator:");
let marks = 78;                   // change marks to see Output: Grade changing.
console.log("Taken-Marks:", marks);

if(marks >=90 && marks <=100){
            console.log("Grade: A+");
        }else if(marks >=75 && marks <=89){
            console.log("Grade: A");
        }else if(marks >=60 && marks <=74){
            console.log("Grade: B");
        }else if(marks >=45 && marks <=59){
            console.log("Grade: C");
        }else if(marks <45){
            console.log("Grade: Fail");
        }else{
            console.log("Invalid Marks");  // If you don't mention anything in marks Output: Shows invalid marks. 
        }     



// Largest of Three Numbers: Take 3 values and find the largest among three numbers.
console.log("Largest Of Three Numbers:");
let a=10;
console.log("A-Value:", a);
let b=20;
console.log("B-Value:", b);    // change A,B,C values to see Output: Largest number among them.
let c=30;
console.log("C-Value:", c);

   if(a>b && a<c){
          largest=a;
     }else if(b>a && b>c){
          largest=b;
     }else if(c>a && c>b){
          largest=c;
    }
 console.log("Largest number is:", largest); // Output: Shows Largest number.


// Leap Year Checker: Check whether a given year is a leap year.
console.log("Leap Year Checker:");

let year= 2000;                   // change year to see Output: is a leap year or not.
console.log("Taken-Year:", year);
 
 if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
            console.log(year + " is a leap year");
            } else {
            console.log(year + " is not a leap year");
            }