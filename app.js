let num1 = 100;
let num2 = 101;

if (num1 == num2) {
    console.log("number 1 is equal to number 2");
} else if (num1 > num2){
    console.log("number 1 is greater than number 2");
} else {
    console.log("number 1 is less than number 2");
    
}

console.log(
    num1 == num2 ? "they're equal" : 
        num1 > num2 ? "num1 > num2" :
            "num1 < num2"
);

