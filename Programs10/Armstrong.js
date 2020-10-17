function Armstrong(num){
    let temp;
    let sum=0;
    let len=3;
    let ori=num;
   while(num!=0){
        temp=Math.ceil(num%10);
        op=Math.pow(temp,len);
        //console.log(op);
        sum=sum+op;
        num=Math.floor(num/10);
   }
   //console.log(sum);
   if(ori==sum){
       console.log("ARMSTRONG");
   }
   else{
       console.log("NOT ARMSTRONG");
   }

}
Armstrong(153);
Armstrong(472);