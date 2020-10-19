function swapNumbers(num1,num2){
    num1=num1+num2;
    num2 =num1-num2;
    num1=num1-num2;
    console.log("Swapped numbers are",num1,num2);
}

swapNumbers(2,4);