//  Assign variables with different data types
let word = "Hello, JavaScript!"; //String
let age = 22;                  //Number
let myBoolean = false;               //Boolean True/False
let hobbies = ["Movies", "Music", "Coding"];  //Array
let  car = {              //Object
  name: "Skyliner",
  model: "GTR-32",
  year: 1999
};
let Person = null;   //Null

//  Call the values in the console
console.log("String:", word);
console.log("Number:", age);
console.log("Boolean:", myBoolean);
console.log("Array:", hobbies);
console.log("Object:", car);
console.log("Null:", Person);


// Display the values in the HTML document
document.getElementById("stringOutput").innerHTML = "String: " + word;
document.getElementById("numberOutput").innerHTML = "Number: " + age;
document.getElementById("booleanOutput").innerHTML = "Boolean: " + myBoolean;
document.getElementById("arrayOutput").innerHTML = "Array: " + hobbies.join(", ");
document.getElementById("objectOutput").innerHTML = "Object: Name = " + car.name + ", model = " + car.model + ", year = " + car.year;
document.getElementById("nullOutput").innerHTML = "Null: " + Person;

