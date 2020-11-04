import { Router } from 'express';
import traineeController from './Controller'

const traineeRouter = Router();

traineeRouter.route('/')
    .get(traineeController.get)
    .post(traineeController.create)
    .put(traineeController.update)
    .delete(traineeController.update)
    //.get((req, res)=>{console.log("Inside get route"); res.send("Inside get route")})
    // .post((req, res)=>{console.log("Inside post route"); res.send("Inside post route")})
    // .put((req, res)=>{console.log("Inside put route"); res.send("Inside put route")})
    // .delete((req, res)=>{console.log("Inside delete route"); res.send("Inside delete route")})


export default traineeRouter;