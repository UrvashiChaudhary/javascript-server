function hasPermission(moduleName: object, role: string, permissionType: string): boolean {
    if (!moduleName.hasOwnProperty(permissionType)) {
        // console.log('false');
        return false;
    }
    else if (moduleName[permissionType].includes(role) || (role === 'head-trainer')) {
       //  console.log('true');
       return true;
    }
    else {
        // console.log('false');
        return false;
    }
}
export { hasPermission }; // export function hasPermission()