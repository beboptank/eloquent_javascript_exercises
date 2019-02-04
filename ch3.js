//These are my solutions to the exercises found in Eloquent JavaScript Chapter 3

//Minimum

function findMin(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

//Recursion

function isEven(number) {
    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}
//An argument of -1 will blow the call stack, given that continually subtracting 2 from -1 will 
//always result in the number becoming more negative. This can be fixed by adding an else if 
//statement, else if (number < 0) {return isEven(number + 2);}

//Bean Counting

function countBs(string) {
    let beans = 0;
    let currentChar = string.charAt(n);
    for (let i = 0; i < string.length; i++) {
        if (currentChar === "B") {
            beans++;
        }
    }
    return beans;
}