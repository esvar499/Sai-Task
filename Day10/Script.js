let num1=12;
let num2=6;
let num3=3;

const checkdivisiblityBy3 = number => {
    //  Here we have declared number should be divisble by 3 and print true.
    if (number % 3 === 0) {
        console.log ("The give Number is :" ,number)
        console.log("If the values is divisble by 3");
        console.log(true);
}
//  This is the statement will be Display after the conditon false.
else {
    console.log ("The give Number is :" ,number)
    console.log("If the values is divisble by 3");
    console.log(false);
}

};
checkdivisiblityBy3(num1);
checkdivisiblityBy3(num2);
checkdivisiblityBy3(num3);
