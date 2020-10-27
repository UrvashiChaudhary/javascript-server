"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = void 0;
function hasPermission(moduleName, role, permissionType) {
    if (!moduleName.hasOwnProperty(permissionType)) {
        console.log("false");
    }
    else if (moduleName[permissionType].includes(role) || (role == 'head-trainer')) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
exports.hasPermission = hasPermission;
//# sourceMappingURL=permissions.js.map