let permissions={
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    },        
}
function hasPermission(moduleName,role,permissionType){
    if(!moduleName.hasOwnProperty(permissionType)){
        console.log("false");
    }
    else if(moduleName[permissionType].includes(role)|| (role=='head-trainer')){
        console.log("true");
    }
    else{
            console.log("false");
        }
}
        

hasPermission(permissions.getUsers,'trainee', 'read');
hasPermission(permissions.getUsers,'traier','write');
    
        
       
       
    
    