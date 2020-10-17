function Even(num){
    if(num%2==0){
        console.log("Even",num);
    }
    else{
        console.log("Odd",num);
    }
}

for(let i=1;i<=100;i++){
    Even(i);
}