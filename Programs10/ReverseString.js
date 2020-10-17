function reverseString(str){
    //let len=str.length;
    let sp="";
    let temp;
    for(let i=str.length;i>=0;i--){
         temp=str.charAt(i);
         sp=sp.concat(temp);
         
        }
        console.log(sp);
    

}
reverseString("Urvashi");