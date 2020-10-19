function primeNumber(num){
    let flag=true;
    if(num==0 || num==1){
        console.log("neither prime nor composite");
    }
    let lt=Math.ceil(num/2);
    
    for(let i=2;i<=lt;i++){
        if(num%i==0){
            flag=false;
            break;
        }
        
    }
    if(flag==true){
        console.log("Prime");
    }
    else{
        console.log("not prime");
    }
}


//primeNumber(2);
//primeNumber(3);
primeNumber(4);
//primeNumber(5);
//primeNumber(6);