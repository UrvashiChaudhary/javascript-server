function hasPermission(moduleName,role:string,permissionType:string){
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
        
export {hasPermission}; //export function hasPermission() 

        
       
       
    
    