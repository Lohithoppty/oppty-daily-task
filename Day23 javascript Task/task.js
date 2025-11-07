
//Shopping Cart:

console.log("Shopping Cart:");
let item1 = 800;
console.log("Honey:", item1);
let item2 = 200;
console.log("Toothpaste:", item2);

let total = item1 + item2;
console.log("Total-Price:", item1+item2);

let discount = total/100*40 ;       // Here you can change discount persentage.
console.log("Discount:", discount);

let finalPrice = total - discount;
console.log("Final-Price:", finalPrice );

// Age and Country Check:

console.log("Age and Country Check:");
const Country1 = "India";
console.log("Country-Name:", Country1);
const Country2 = "USA";
console.log("Country-Name:",Country2);
let Age = 10;                      // if you change age to 18 or more you will be Allowed.
console.log("Age:",Age);

if(Age >= 18 && (Country1 == "India" || Country2 == "USA")){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}
 
 
