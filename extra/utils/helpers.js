function validateEmail(input){
    let correct = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;
    
    return correct.test(input);
}
export{validateEmail};