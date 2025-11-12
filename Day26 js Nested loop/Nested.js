
// Invert of right-angle triangle.

console.log("                Invert Of Right-Angle Triangle:");

 for(let i = 1; i <= 5; i++){
     let pattern = "";
     // Add spaces before stars
    for(let s = 1; s <= 5 - i; s++) {
        pattern += "   "; // 3 spaces for alignment.
    }
     for(let j = 1; j <= i; j++){
        pattern = pattern + "*  "; // 2 spaces for Asterisks Gap.
     }
     console.log(pattern);     // Output shows Rigth-angle triangle of Asterisks. 
 }



// Pyramid Pattern.

console.log("                      Pyramid Pattern:");

for(let l = 1; l <= 5; l++){
    let pattern1 = "";
    // Add spaces before stars
    for(s = 1; s <= 5 - l; s++){
        pattern1 += "  "; //2 spaces for aligment.
    }
     for(let m = 1; m <= l; m++){
        pattern1 = pattern1 + "*   "; // 3 spaces for asterisks  Gap.
     }
     console.log(pattern1);  // Output: shows Pyramid Pattern of Asterisks.
}



//Display all Products.

console.log("          Display All Products:")

let  colors = ["Red", "Green", "Blue"];
console.log("Avialable Colors:", colors);

let   sizes = ["Small", "Medium", "Large"];
console.log("Avialable Sizes:", sizes);

    //console.log(colors.length);       // if you remove this comment output: displays Array count.

    for(let color of colors){
        for(let size of sizes){
            }
    }
console.log("        Avialable Sizes In Red:")

    console.log(`${colors[0]} = ${sizes[0]}, ${sizes[1]}, ${sizes[2]}.`); 

console.log("        Avialable Sizes In Green:")

    console.log(`${colors[1]} = ${sizes[0]}, ${sizes[1]}, ${sizes[2]}.`);

console.log("        Avialable Sizes In Blue:")

    console.log(`${colors[2]} = ${sizes[0]}, ${sizes[1]}, ${sizes[2]}.`);

