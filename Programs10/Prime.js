function primeNumber(num){
    let flag=0;
    let i;
    if(num==0||num==1){
        console.log(" composite");
    }
    else{
        for( i=2;i<num/2;i++){
            if(num%i==0){
                //console.log("not prime");
                flag=1;
                n=i;
                break;
            }
            
        }
        if(flag==0){
            console.log("prime");
        }
        else{
            console.log("not prime");
        }
    }
}
primeNumber(99);