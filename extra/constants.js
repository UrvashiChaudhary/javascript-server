//move permissions from permission.js to constants.js

const permissions={
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    },        
};
//now  export permissions from constants.js
export {permissions};