export function equilateralTriangle(rows){

    for(let i=1;i<=rows;i++){
        let sp="";
        for(let j=rows;j>=i;j--){
            sp=sp+" ";
        }
        
        for(let k=1;k<=i;k++){
            sp=sp+"* ";
            }
            console.log(sp); 
        }
    }   
    
    /*for(let i=2;i<=10;i++){
        
    equilateralTriangle(i);
    }*/
    
    