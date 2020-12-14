function Palindrome(num)
{
    let rem,ori;
    let rev=0;
    
    ori=num;
    while(num>0){
        rem=Math.ceil(num%10);
        rev=rev*10+rem;
        num=Math.floor(num/10);
    }
    console.log(rev);
    if(rev==ori){
        console.log("Palindrome");
    }
    else{
        console.log("not Palindrome");
    }
    
}
Palindrome(1211);
Palindrome(121);