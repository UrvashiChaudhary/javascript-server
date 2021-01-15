import { Router } from 'express';
import traineeController from './Controller';

import validationHandler from '../../libs/validationHandler';
import authMiddleware from '../../libs/routes/authMiddleWare';
import validation from './validation';

import { authMiddleWare } from '../../libs/routes';


const traineeRouter: Router = Router();
/**
 * @swagger
 *
 *  definitions:
 *      TraineePost:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: urvashi.chaudhary@successive.tech
 *          name:
 *              type: string
 *              example: urvashi
 *          password:
 *              type: string
 *              example: train@12
 *          role:
 *               type: string
 *               example: trainee
 *      TraineeResponse:
 *        type: object
 *        properties:
 *          _id:
 *              example: 5e4a36bc64824b1f80b730cd
 *          email:
 *              type: string
 *              example: urvashi.chaudhary@successive.tech
 *          name:
 *              type: string
 *              example: urvashi
 *          role:
 *              type: string
 *              example: trainee
 *          originalId:
 *              example: 5e4a36bc64824b1f80b730cd
 *          createdBy:
 *              example: 5e45404398e86d576ad964e6
 *          createdAt:
 *              example: 2020-02-20T11:33:39.325Z
 *          v:
 *              example:0
 *      Unauthorized:
 *        type: object
 *        properties:
 *          error:
 *              example: Unauthorized
 *          message:
 *              example: Token not found
 *          status:
 *              example: 403
 *          timestamp:
 *               example: 2020-11-25T17:34:37.066Z
 *
 */

traineeRouter.route('/')

/**
 * @swagger
 *
 * /api/trainee:
 *   get:
 *     tags:
 *       - Trainee
 *     description: List of all the trainees
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: skip
 *         description: Number of elements to skip
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: number of elements to show
 *         in: query
 *         required: false
 *         type: number
 *       - name: sort
 *         description: Parameter to sort (name or email)
 *         in: query
 *         required: false
 *         type: string
 *       - name: sortedBy
 *         description: Elements to sort By(sorting order)
 *         in: query
 *         required: false
 *         type: string
 *       - name: searchBy
 *         description: Element to search
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Trainee List
 *         schema:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: 'successfully fetched Trainee'
 *                  TotalCount:
 *                      example: 10
 *                  TraineeCount:
 *                      example: 2
 *                  data:
 *                      type: object
 *                      allOf:
 *                              - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
    .get(authMiddleWare('getUsers', 'read'), validationHandler(validation.get), traineeController.get)
    // .get(validationHandler(validation.get),traineeController.get)
/**
 * @swagger
 *
 * /api/trainee:
 *   post:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on creation
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Data of users.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/TraineePost'
 *     responses:
 *       200:
 *         description: User Created Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: Trainee Created Successfully
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *                      properties:
 *                              name:
 *                                  type: string
 *                                  example: "UrvashiChaudhary"
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
    .post(authMiddleWare('getUsers', 'write'), validationHandler(validation.create), traineeController.create)
    //  .post(validationHandler(validation.create),traineeController.create)

/**
 * @swagger
 *
 * /api/trainee:
 *   put:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on Updation
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Data of users.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *          oneOf:
 *          properties:
 *              id:
 *                  example: 5e4e6e93c095d84d34045a30
 *              dataToUpdate:
 *                  type: object
 *                  allOf:
 *                      - $ref: '#/definitions/TraineePost'
 *     responses:
 *       200:
 *         description: User Updated Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: successfully upddate
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

    .put(authMiddleWare('getUsers', 'update'), validationHandler(validation.update), traineeController.update)
    // .put(validationHandler(validation.update),traineeController.update)

/**
 * @swagger
 *
 * /api/trainee:
 *   delete:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on deletion
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID of user to be deleted.
 *         in: query
 *         required: true
 *         type: string
 *         example: 5e4e6e93c095d84d34045a30
 *     responses:
 *       200:
 *         description: Data deleted
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: Deleted successfully
 *                  code:
 *                      example: 200
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), traineeController.delete);
// .delete(validationHandler(validation.delete),traineeController.update)
// .get((req, res)=>{console.log("Inside get route"); res.send("Inside get route")})
// .post((req, res)=>{console.log("Inside post route"); res.send("Inside post route")})
// .put((req, res)=>{console.log("Inside put route"); res.send("Inside put route")})
// .delete((req, res)=>{console.log("Inside delete route"); res.send("Inside delete route")})


export default traineeRouter;
