import * as jwt from 'jsonwebtoken';
import { hasPermission } from '../permissions';
import { permissions } from '../constants';
export default (module, permissionType) => (req, res, next) => {
    try {
        console.log('The config is: ', module, permissionType);
        console.log('Header is: ', req.headers, ['authorization']);
        const token = req.headers.authorization;
        const decodeUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log('user', decodeUser);
        const a = decodeUser.Role;
        hasPermission(permissions.getUsers, a, permissionType);
        // let a =decodeUser.req.headers.get("Role");
        // console.log("jee");
        // console.log("value of Role: ",decodeUser.Role);
        // console.log("hii");
        next();
    } catch (err) {
        next({
            error: 'unauthorized',
            code: 403
        });
    }
};