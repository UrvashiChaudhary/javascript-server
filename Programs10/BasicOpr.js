function basicOperation(num1,num2){
    let sum,diff,mul,div,mod;
    sum=num1+num2;
    diff=num1-num2;
    mul=num1*num2;
    div=num1/num2;
    mod=num1%num2;
    console.log("Addition is",sum);
    console.log("Subtraction is",diff);
    console.log("Division is",div);
    console.log("Multiplication is",mul);
    console.log("Modulus is",mod);
}
basicOperation(10,2);