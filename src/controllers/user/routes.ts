// create a routes.ts file
import { Router } from "express";
import UserController from "./Controller";
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMoiddleWare from "../../libs/routes/authMiddleware";

const UserRouter = Router();

UserRouter.route('/login')
    .post(authMoiddleWare())


/*UserRouter.route('/')
    .get(validationHandler(validation.get), UserController.get)
    .post(validationHandler(validation.create), UserController.create)
    .put(validationHandler(validation.update), UserController.update)
    .delete( validationHandler(validation.delete),UserController.delete);
*/
export default UserRouter;