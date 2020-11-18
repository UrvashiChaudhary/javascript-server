import { Router } from 'express';
import traineeController from './Controller';

import validationHandler from '../../libs/validationHandler';
import authMiddleWare from '../../libs/routes/authMiddleware';

import validation from './validation';

const traineeRouter = Router();

traineeRouter.route('/')
    .get( authMiddleWare('getUser', 'read'), validationHandler(validation.get), traineeController.get )
    .post( authMiddleWare('getUser', 'read'), validationHandler(validation.create), traineeController.create )
    .put(   authMiddleWare('getUser', 'read'), validationHandler(validation.update), traineeController.update)
    .delete( authMiddleWare('getUser', 'read'), validationHandler(validation.delete), traineeController.delete);
// .get((req, res)=>{console.log("Insi de get route"); res.send("Inside get route")})
// .post((req, res)=>{console.log("Inside post route"); res.send("Inside post route")})
// .put((req, res)=>{console.log("Inside put route"); res.send("Inside put route")})
// .delete((req, res)=>{console.log("Inside delete route"); res.send("Inside delete route")})


export default traineeRouter;