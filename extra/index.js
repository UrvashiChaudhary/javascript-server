import {diamondPattern, equilateralTriangle} from './patterns/index';
// import{validateEmail,hasPermission} from './utils/index'
//import{permissions} from './constants'
diamondPattern(4);
console.log();
equilateralTriangle(4);
console.log
//validateEmail("urvashi@successive.tech");
//validateEmail("905283904");
//validateEmail(users);
console.log();

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


import {hasPermission} from './utils/permissions.js';
import {permissions} from './constants';
hasPermission(permissions.getUsers,"trainer","write");
hasPermission(permissions.getUsers,"trainer","dlt");