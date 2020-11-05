import { validateEmail } from './helpers';

function validateUser(users): void {
    const validUser: string[] = [];
    const invalidUser: string[] = [];
    users.forEach(( user ) => {
        const { traineeEmail, reviewerEmail } = user;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            validUser.push(traineeEmail + '', '' + reviewerEmail);
        }
        else {
            invalidUser.push(traineeEmail + ', ' + reviewerEmail);
        }


    });

    console.log('number of valid users', validUser.length);
    console.log('Valid Users', validUser);
    console.log();
    console.log('number of invalid users', invalidUser.length);
    console.log('invalid users', invalidUser);

}
export { validateUser }; // export validateUser()
export { validateEmail }; // export validateEmail()




