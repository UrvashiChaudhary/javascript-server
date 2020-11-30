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
    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { skip, limit, sort } = req.query;
            console.log('Inside GET method of Trainee controller ');
            let sort1: any;

            if (sort === 'email') {
                sort1 = { email: -1 };
            }
            else if (sort === 'name') {
                sort1 = { name: -1 };
            }
            else {
                sort1 = { createdAt: -1 };
            }
            const trainee = await this.userRepository.list1('trainee', sort, skip, limit);
            const traineeCount = await this.userRepository.count();
            console.log('count is ', traineeCount);
                res.status(200).send({ message: 'successfully fetched Trainee',
                totalCount: traineeCount,
                traineeCount: trainee.length,
                record: trainee });

        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside POST method of Trainee controller ');
            const res1 = await this.userRepository.create({ role: req.body.role, name: req.body.name, email: req.body.email });
            console.log('Response is: ', res1);
            res.status(200).send({ message: 'Trainee created successfully', data: res1 });
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { role, name, id, email, password } = req.body;
            console.log('Inside Update method of Trainee controller ');
            console.log('id', id);
            const result = await this.userRepository.findOne({ originalId: id });
            console.log('result', result);
            if (result !== undefined) {
                // console.log('helllo');
                const data = await this.userRepository.update({ updatedAt: Date.now(), updatedBy: id, createdBy: id, name: name || result.name, role: role || result.role, email: email || result.email, password: password || result.password }, result._id);
                console.log('response is ', data);
                res.status(200).send({ message: 'successfully update', data1: data });
            }
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    delete = async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { id } = req.query;
            console.log(id);
            const result1 = await this.userRepository.findOne({ originalId: id });
            if (result1 !== undefined) {
                const result = await this.userRepository.deleteData(id, result1.id);
                console.log('Data deleted successfully');
                res.status(200).send({ message: 'Data Deleted successfully', data: result });
            }
            else {
                console.log('User not found to be deleted');
                res.send({
                    message: 'User not found to be deleted',
                    code: 404
                });
            }
        }
        catch (err) {
            console.log('Inside error : ', err);
            res.status(200).send({ message: 'Inside error ', data: err });
        }
    }

}

export default TraineeController.getInstance();

// export default new TraineeController();
