"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateUser = void 0;
const helpers_1 = require("./helpers");
Object.defineProperty(exports, "validateEmail", { enumerable: true, get: function () { return helpers_1.validateEmail; } });
function validateUser(users) {
    let v_users = [];
    let i_users = [];
    users.forEach((users) => {
        const { traineeEmail, reviewerEmail } = users;
        if (helpers_1.validateEmail(traineeEmail) && helpers_1.validateEmail(reviewerEmail)) {
            v_users.push(traineeEmail + ", " + reviewerEmail);
        }
        else {
            i_users.push(traineeEmail + ", " + reviewerEmail);
        }
    });
    console.log("number of valid users", v_users.length);
    console.log("Valid Users", v_users);
    console.log();
    console.log("number of invalid users", i_users.length);
    console.log("invalid users", i_users);
}
exports.validateUser = validateUser;
//# sourceMappingURL=validation.js.map