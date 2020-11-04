import { Router } from 'express';
import traineeController from './Controller'

import validationHandler from '../../libs/validationHandler';

import validation from './validation'

const traineeRouter = Router();

traineeRouter.route('/')
    .get(validationHandler(validation.get),traineeController.get)
    .post(validationHandler(validation.create),traineeController.create)
    .put(validationHandler(validation.update),traineeController.update)
    .delete(validationHandler(validation.delete),traineeController.update)
    //.get((req, res)=>{console.log("Inside get route"); res.send("Inside get route")})
    // .post((req, res)=>{console.log("Inside post route"); res.send("Inside post route")})
    // .put((req, res)=>{console.log("Inside put route"); res.send("Inside put route")})
    // .delete((req, res)=>{console.log("Inside delete route"); res.send("Inside delete route")})


export default traineeRouter;