function Fibonacci(num){
    let n1=0,n2=1,n3;
    let sp="";
    sp=sp+n1+" "+n2;
    
    for(let i=2;i<=num;i++){
        n3=n1+n2;
        sp=sp+" "+n3
        
        n1=n2;
        n2=n3;
    }
    console.count(sp);
    
}
Fibonacci(10);