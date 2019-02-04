// These are my solutions to the exercises found in Chapter 2 of Eloquent JavaScript.

//Looping a Triangle

let tri = "";

//Start loop to print triangle
for (let i = 0; i < 8; i++) {
        tri += "#";
        console.log(tri);
}

//FizzBuzz
//Variation 1

let num = 1;

while (num < 101) {
    if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    if (num == 100) {
        break;
    }
    num++;
}

//Variation 2

let num = 1;

while (num < 101) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz");
    } else if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    if (num == 100) {
        break;
    }
    num++;
}

//Chess Board

//Variation 1

let grid = "";
let rowCount = 0;

for (let i = 0; i < 4; i++) {
    grid += "# # # # ";
    grid += "\n";
    while (rowCount % 2 == 0) {
        grid += " # # # #";
        grid += "\n";
        rowCount += 1;
    }
    rowCount += 1;
}

console.log(grid);

//Variation 2 

let grid = "";
let rowCount = 0;
let size = 8;

for (let i = 0; i < (size / 2); i++) {
    grid += "# # # # ";
    grid += "\n";
    while (rowCount % 2 == 0) {
        grid += " # # # #";
        grid += "\n";
        rowCount += 1;
    }
    rowCount += 1;
}

console.log(grid);