import{validateEmail} from './helpers'

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
export{validateUser};// export validateUser()
export{validateEmail};//export validateEmail()
    



