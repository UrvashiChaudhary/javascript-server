import { Router } from 'express';
import UserController from './Controller';

import validationHandler from '../../libs/validationHandler';

// import validation from './validation';

const UserRouter = Router();

UserRouter.route('/')
    .get(UserController.get)
    .post(UserController.create)
    .put(UserController.update)
    .delete(UserController.update);
// .get((req, res)=>{console.log("Inside get route"); res.send("Inside get route")})
// .post((req, res)=>{console.log("Inside post route"); res.send("Inside post route")})
// .put((req, res)=>{console.log("Inside put route"); res.send("Inside put route")})
// .delete((req, res)=>{console.log("Inside delete route"); res.send("Inside delete route")})


export default UserRouter;