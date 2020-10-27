"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
//move validateEmail() from validation to helpers.js
function validateEmail(input) {
    let correct = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;
    return correct.test(input);
}
exports.validateEmail = validateEmail;
//# sourceMappingURL=helpers.js.map