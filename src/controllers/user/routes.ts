// create a routes.ts file
import { Router } from "express";
import UserController from "./Controller";
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleware from "../../libs/routes/authMiddleWare";


const UserRouter = Router();


UserRouter.route('/login')
.post(UserController.login);
UserRouter.route('/me')
.get(authMiddleware('getUser', 'read'), UserController.me);



/*UserRouter.route('/')
.get(validationHandler(validation.get), UserController.get)
.post(validationHandler(validation.create), UserController.create)
.put(validationHandler(validation.update), UserController.update)
.delete( validationHandler(validation.delete),UserController.delete);
*/
export default UserRouter;