function primeNumber(num){
    let flag=true;
    if(num==0 || num==1){
       console.log("neither prime nor composite");
    }
    else{
    let lt=Math.ceil(num/2);
    
    for(let i=2;i<=lt;i++){
        if(num%i==0){
            flag=false;
            break;
        }
        
    }
    if(flag){
        console.log("Prime");
    }
    else{
        console.log("not prime");
    }
}
}


primeNumber(1);
primeNumber(3);
primeNumber(0);
primeNumber(5);
primeNumber(6);