"use strict";
//move permissions from permission.js to constants.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
};
exports.permissions = permissions;
//# sourceMappingURL=constants.js.map