"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = exports.validateEmail = exports.hasPermission = void 0;
//Now import hasPermission from permission.js and again export it
const permissions_js_1 = require("./permissions.js");
Object.defineProperty(exports, "hasPermission", { enumerable: true, get: function () { return permissions_js_1.hasPermission; } });
//import validateEmail()  from validation and export it
const validation_1 = require("./validation");
Object.defineProperty(exports, "validateEmail", { enumerable: true, get: function () { return validation_1.validateEmail; } });
//import validateUser() from validation and export it
const validation_2 = require("./validation");
Object.defineProperty(exports, "validateUser", { enumerable: true, get: function () { return validation_2.validateUser; } });
//# sourceMappingURL=index.js.map