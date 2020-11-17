import { Router } from 'express';
import traineeController from './Controller';

import validationHandler from '../../libs/validationHandler';

import validation from './validation';

import { authMiddleWare } from '../../libs/routes';


const traineeRouter: Router = Router();

traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(validation.get), traineeController.get)
    // .get(validationHandler(validation.get),traineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(validation.create), traineeController.create)
    //  .post(validationHandler(validation.create),traineeController.create)
    .put(authMiddleWare('getUsers', 'update'), validationHandler(validation.update), traineeController.update)
    // .put(validationHandler(validation.update),traineeController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), traineeController.delete);
// .delete(validationHandler(validation.delete),traineeController.update)
// .get((req, res)=>{console.log("Inside get route"); res.send("Inside get route")})
// .post((req, res)=>{console.log("Inside post route"); res.send("Inside post route")})
// .put((req, res)=>{console.log("Inside put route"); res.send("Inside put route")})
// .delete((req, res)=>{console.log("Inside delete route"); res.send("Inside delete route")})


export default traineeRouter;