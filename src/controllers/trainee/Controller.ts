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
        return TraineeController.instance;
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
            console.log('Inside GET method of Trainee controller ');
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
            console.log('Inside POST method of Trainee controller ');
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
            const { role, name, id, email, password } = req.body;
            console.log('Inside Update method of Trainee controller ');
            console.log('id', id);
            userModel.findOne({ originalId: id }, (err, result) => {
                console.log('id1', result);

                if (result !== undefined) {
                    this.userRepository.update({ updatedAt: Date.now(), updatedBy: id, createdBy: id, name: name || result.name, role: role || result.role, email: email || result.email, password: password || result.password }, result.id)
                        .then((data) => {
                            console.log('response is ', data);
                            res.status(200).send({ message: 'successfully update', data1: data });
                        });
                }
            });


        } catch (err) {
            console.log('Inside Error', err);
        }
    }

    delete = (req: Request, res: Response, next: NextFunction) => {

        try {
            const { id } = req.query;
            console.log(id);
            userModel.findOne({ originalId: id }, (err, result1) => {
                if (result1 !== undefined) {
                    this.userRepository.deleteData(id, result1.id)
                        .then((result) => {
                            console.log('Data deleted successfully');
                            res.status(200).send({ message: 'Data Deleted successfully', data: result });
                        });
                }
                else {
                    console.log('User not found to be deleted');
                    res.send({
                        message: 'User not found to be deleted',
                        code: 404
                    });
                }
            });
        }
        catch (err) {
            console.log('Inside error : ', err);
            res.status(200).send({ message: 'Inside error ', data: err });
        }
    }
}
export default TraineeController.getInstance();

// export default new TraineeController();
