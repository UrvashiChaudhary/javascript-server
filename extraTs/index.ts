// import diamondPattern() and equilateralTriangle() from patterns/index
import { diamondPattern, equilateralTriangle } from './patterns/index';
diamondPattern(4);
console.log();
equilateralTriangle(4);
console.log();


// import hasPermission and permissions from utils/index and constants.js respecively
import { hasPermission } from './utils/index.js';
import { permissions } from './constants.js';


hasPermission(permissions.getUsers, 'trainer', 'write');
hasPermission(permissions.getUsers, 'trainer', 'dlt');

console.log();


// import validateEmail() and validateUsers() from utils.index
import { validateEmail } from './utils/index';
import { validateUser } from './utils/index';

// move users from permissions to extra.index
const users: Iusers[] = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
},
{
    traineeEmail: 'urvashi.chaudhary@successive.tech',
    reviewerEmail: 'mohammad.adil@successive.tech',
},
{
    traineeEmail: 'trainee@gmail.com',
    reviewerEmail: 'user@gmail.com',
},
];

validateUser(users);
import { Iusers } from './interfaces';



