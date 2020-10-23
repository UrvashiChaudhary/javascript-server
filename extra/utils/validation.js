const users = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail:'urvashi.chaudhary@successive.tech',
        reviewerEmail:'mohammad.adil@successive.tech',
    },
    {
        traineeEmail:'trainee@gmail.com',
        reviewerEmail:'user@gmail.com',
    },
];


// function validateEmail(input){
//     let correct = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;
    
//     return correct.test(input);
// }




function validateUser(users){
    let v_users=[];
    let i_users=[];
    users.forEach((users)=> {
        const {traineeEmail,reviewerEmail}= users;
        if(validateEmail(traineeEmail)&&validateEmail(reviewerEmail)){
            v_users.push(traineeEmail+", "+reviewerEmail);
        }
        else{
            i_users.push(traineeEmail+", "+reviewerEmail);
        }

        
    });
    
    console.log("number of valid users",v_users.length);
    console.log("Valid Users",v_users);
    console.log();
    console.log("number of invalid users",i_users.length);
    console.log("invalid users",i_users);
    
}
    
//validateUser(users);

    


import{validateEmail} from './helpers'

//validateEmail("urvashi@successive.tech");
//validateEmail("905283904");
