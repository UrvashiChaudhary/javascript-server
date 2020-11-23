// create a routes.ts file
import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const UserRouter = Router();

UserRouter.route('/me')
    .get(authMiddleWare('getUser', 'read'), validationHandler(validation.get), UserController.me);

UserRouter.route('/login')
    .post(authMiddleWare('getUser', 'read'), validationHandler(validation.create), UserController.login);



/*UserRouter.route('/')
.get(validationHandler(validation.get), UserController.get)
.post(validationHandler(validation.create), UserController.create)
.put(validationHandler(validation.update), UserController.update)
.delete( validationHandler(validation.delete),UserController.delete);
*/
export default UserRouter;