import * as jwt from 'jsonwebtoken';
import configuration from '../../config/configuration';
import { hasPermission } from '../permissions';
import { permissions } from '../constants';
import { Request, Response, NextFunction } from 'express';
export default (moduleName: any, permissionType: any) => (req: Request, res: Response, next: NextFunction) => {
    console.log(' AUTHMIDDLEWARE ', moduleName, permissionType);
    try {
       
        // console.log('The config is: ', module, permissionType);
        const token = req.headers.authorization;
        const { key } = configuration;
        const decodeUser = jwt.verify(token, key);
        console.log('decodeUser', decodeUser);
        const a: string = decodeUser.role;
       
        // if (!decodeUser) {
        //     return next({
        //         staus: 403,
        //         error: 'Unauthorized Access',
        //         message: 'Unauthorized Access'
        //     });
        // }
        //hasPermission(permissions.getUsers,a,permissionType);
        const permissionCheck = hasPermission(permissions.getUsers, a, permissionType);
        console.log(permissionCheck);

        if (!permissionCheck) {

            console.log("jkhdds");
            return next({
            
                staus: 403,
                error: 'Unauthorized Access',
                message: 'Unauthorized Access'

            });

        }
        
        next();
    } catch (err) {
        next({
            error: 'unauthorized',
            code: 403
        });
    }
};