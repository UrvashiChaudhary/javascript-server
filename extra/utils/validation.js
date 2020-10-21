const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail:'urvashi.chaudhary@successive.tech',
        reviewerEmail:'mohammad.adil@successive.tech',
    },
    {
        traineeEmail:'i@gmail.com',
        reviewerEmail:'jfjjjjf',
    },
];


function validateEmail(input){
    let correct = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    return correct.test(input);
}




function validateUser(users){
    let valid=0;
    let invalid=0;
    let v_users="";
    let i_users="";
    let len=users.length;
    //console.log(len);
    for(let i=0;i<len;i++){
        const {traineeEmail,reviewerEmail} = users[i];
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            console.log("true",{traineeEmail,reviewerEmail});
            valid++;
            v_users+="("+traineeEmail+" , "+reviewerEmail+") ";
        }
        else{
            console.log("false",{traineeEmail,reviewerEmail});
            invalid++;
            i_users+="("+traineeEmail+" , "+reviewerEmail+") ";
        }
    }
   
    console.log("Number of valid emails",valid);
    console.log("Valid Users:",v_users);
    console.log("Number of invalid emails",invalid);
    console.log("Invalid Users",i_users);
    
}
validateUser(users);

    



//validateEmail("urvashi@successive.tech");
//validateEmail("905283904");
