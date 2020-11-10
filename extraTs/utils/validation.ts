import { validateEmail } from './helpers';

function validateUser(users): void {
    const V_USERS: string[] = [];
    const I_USERS: string[] = [];
    users.forEach((user) => {
        const { traineeEmail, reviewerEmail } = user;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            V_USERS.push(traineeEmail + ', ' + reviewerEmail);
        }
        else {
            I_USERS.push(traineeEmail + '', '' + reviewerEmail);
        }


    });

    console.log('number of valid users', V_USERS.length);
    console.log('Valid Users', V_USERS);
    console.log();
    console.log('number of invalid users', I_USERS.length);
    console.log('invalid users', I_USERS);

}
export { validateUser }; // export validateUser()
export { validateEmail }; // export validateEmail()




