import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import config from '../../config/configuration';
import { hasPermission } from '../permissions';
import { permissions } from '../constants';
import IRequest from '../IRequest';

export default (moduleName: string, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log("::::::::::::INSIDE AUTHMIDDLEWARE::::::::::::");
      const token = req.headers['authorization'];
      const secret = config.secretKey;
      console.log('secrett', secret);
      console.log('tokennnn:', token);
      async function verifyUser() {
          const decodeUser = await jwt.verify(token, secret);
          console.log('decoderrrr', jwt.verify(token, secret));
          return decodeUser;
        }
        verifyUser().then((result) => {
          console.log('resulttttt', result);
          if (result) {
              const role = result.result.role;
              console.log("hiiiiii");
              console.log("role is ", role)
              const userRepository: UserRepository = new UserRepository();
              userRepository.find({ email: result['email'], originalId: result['id'], deletedAt: null })
                  .then((result1) => {
                      if (!result1) {

                          console.log("user does not exist ");
                          res.send({
                              status: 404,
                              message: "user does not exist",
                              data: result1
                          });
                      }
                      else {
                        console.log('ccccccc', hasPermission(permissions.getUsers, role, permissionType));
                          if (hasPermission(permissions.getUsers, role, permissionType)) {
                              console.log(`${role} has permission ${permissionType} :true`);
                              req.user = result.result;
                              next();
                          }
                          else {
                              next({
                                  status: 403,
                                  error: "Unauthorized",
                                  message: "Permission denied",
                              });
                          }
                      }
                  })
                  .catch((err) => { console.log(err) });
          }
          else {
              console.log("Has problem in token");
          }
      })
          .catch((err) => {
              console.log("Error : ", err);
          })
  }
    catch (err) {
        next({
            error: 'Unauthorized',
            code: 403
        });
    }};
