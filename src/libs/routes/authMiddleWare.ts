import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as bcrypt from 'bcrypt';
import { hasPermission } from '../permissions';
import { permissions } from '../constants';
import { error } from 'console';
import IRequest from '../IRequest';

export default (moduleName: string, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log('The config is : ', moduleName, permissionType);
        console.log('Header is ', req.headers.authorization);
        const token = req.headers.authorization;
        const secret = 'qwertyuiopasdfghjklzxcvbnm123456';
        const decodeUser = jwt.verify(token, secret);
        const role = decodeUser.role;
        console.log('User', decodeUser);

        if (hasPermission(permissions.getUsers, role, permissionType)) {
            console.log(`${role} has permission ${permissionType} :true`);
        }
        else {
             next({ error: 'unauthorized', message: 'Permission denied', status: 403 });
        }
        req.user = decodeUser;
        next();
    }
    catch (err) {
        next({
            error: 'Unauthorized',
            code: 403
        });
    }};
