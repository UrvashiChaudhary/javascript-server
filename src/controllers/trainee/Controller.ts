// create a class according to instructions that mention in #39523
import { Request, NextFunction, Response } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import UserRepository from '../../repositories/user/UserRepository';
class TraineeController {
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return  TraineeController.instance;
    }
    constructor() {
        this.get = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    userRepository: UserRepository = new UserRepository();
    get = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside GET method of Trianee controller ');
            this.userRepository.getAll()
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({ message: 'successfully fetched Trainee', data: res1 });
                });
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    create = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside POST method of Trianee controller ');
            this.userRepository.create({ role: req.body.role, name: req.body.name })
                .then((res1) => {
                    console.log('Response is: ', res1);
                    res.status(200).send({ message: 'Trainee created successfully', data: res1 });
                });
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    update = (req: Request, res: Response, next: NextFunction) => {
        try {
            const { role, name, id, email } = req.body;
            console.log('Inside Update method of Trianee controller ');
            userModel.findOne({ originalId: id }, (err, result) => {

                if (result !== undefined) {
                    this.userRepository.update({ name1: name, role1: role, email1: email }, result.id)
                        .then((data) => {
                            console.log('respnse is ', data);
                            res.status(200).send({ message: 'successfully upddate', data1: data });
                        });
                }
            });


        } catch (err) {
            console.log('Inside Error', err);
        }
    }

    public delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const userData = userModel.findOne({ originalId: id });
            userModel.findOne({ originalId: id });
            const remover = '5fb3663da080091a8c21d58b';
            console.log(remover, ' remover');
            const user = new UserRepository();
            user.delete(id, remover)
                .then((result) => {
                    res.send({
                        message: 'Deleted successfully', result,
                        code: 200,
                        data: result
                    });
                });
        }
        catch (err) {
            res.send({
                message: 'User not found to be deleted',
                code: 404
            });
        }
    }
}
export default TraineeController.getInstance();

// export default new TraineeController();
