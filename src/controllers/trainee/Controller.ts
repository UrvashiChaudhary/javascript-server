import { Request, NextFunction, Response } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import UserRepository from '../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
class TraineeController {
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    userRepository: UserRepository = new UserRepository();
    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Inside GET method of Trainee controller ');
            let sort: any;
            if (req.query.sort === 'name' || 'email') {
                sort = { email: req.query.sortedby };
            }

            let search: any;
            if (req.query.searchBy !== undefined) {
                let search1 = await this.userRepository.list1( sort, req.query.skip, req.query.limit, { name: { $regex: req.query.searchBy } } );
                let search2 = await this.userRepository.list1( sort, req.query.skip, req.query.limit,  { email: { $regex: req.query.searchBy } } );
                search = { ...search1, ...search2}
              }

            else {
                search = await this.userRepository.list1(sort, req.query.skip, req.query.limit, {});
            }
            const traineeCount = Object.keys(search);
            const traineeCount1 = await this.userRepository.count();
            console.log('count is ', traineeCount1);
            const res1 = await this.userRepository.getAll();
            // console.log('Response is: ', res1);
            res.status(200).send({
                message: 'successfully fetched Trainee',

                totalCount: traineeCount1,
                traineeCount: traineeCount.length,
                // data: res1,
                record: search
            });

        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {role, name, email, password} = req.body;
            console.log('Inside POST method of Trainee controller <<---->> ', req);
            const res1 = await this.userRepository.create({ role, name, email, password: bcrypt.hashSync(password, 10) });
            console.log('Response is frontend: ', res1);
            res.status(200).send({ message: 'Trainee created successfully', data: res1 });
        } catch (err) {
            console.log('Inside Error frontend', err);
        }
    }
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { role, name, id, email, password } = req.body;
            console.log('Inside Update method of Trainee controller ');
            const result = await this.userRepository.update(req.body);
            if (result !== undefined) {
                res.status(200).send({ message: 'successfully update', data1: [result] });
            }
        } catch (err) {
            console.log('Inside Error', err);
        }
    }
    public async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = new UserRepository();
            console.log("req.query.id", req.query.id);
            const response = await userRepository.delete(req.query.id);
            if(response){
              res.send({
                message: 'Trainee deleted successfully!',
                data: response,
                status: 200,
            });
            }
        }
        catch (err) {
            console.log('error is ', err);
        }
    }

}

export default TraineeController.getInstance();
