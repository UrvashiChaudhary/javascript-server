function hasPermission(moduleName: object, role: string, permissionType: string): void {
    if (!moduleName.hasOwnProperty(permissionType)) {
        console.log('false');
    }
    else if (moduleName[permissionType].includes(role) || (role === 'head-trainer')) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}
export { hasPermission }; // export function hasPermission()