import { Router } from 'express';
import { traineeRouter } from './controllers';

const mainRouter:Router =  Router();
mainRouter.use('/trainee',traineeRouter);

export default mainRouter;