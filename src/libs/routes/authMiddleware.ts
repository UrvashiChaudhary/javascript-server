import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { userModel } from "../../repositories/user/UserModel";
import * as bcrypt from "bcrypt";

export default () => (req: Request, res: Response, next: NextFunction) => {

    try {

        const { email, password } = req.body;
        console.log(email);
        userModel.findOne({ email: email }, (err, result) => {
            if (result) {
                if (password === result.password) {

                    result.password = bcrypt.hashSync(result.password, 10);
                    const token = jwt.sign({ result }, 'xMi43lDEhAHie5lL5V6Sord0PJsim4UU');
                    console.log(result);
                    console.log(token);
                    res.send({
                        data: token,
                        message: 'Login successfully',
                        status: 200
                    });
                }
                else {
                    res.send({
                        message: 'Password Doesnt Match',
                        status: 400
                    });
                }
            }
            else {
                res.send({
                    message: 'Email is not Registered',
                    status: 404
                });
            }
        });
    }
    catch (err) {
        res.send(err);
    }
}