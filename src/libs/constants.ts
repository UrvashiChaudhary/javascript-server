// move permissions from permission.js to constants.js
const permissions: Ipermission = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
        update: ['head-trainee']
    },
};
import { Ipermission } from './interfaces';

// now  export permissions from constants.js
export { permissions };