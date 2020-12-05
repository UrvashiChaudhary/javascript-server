import * as mongoose from 'mongoose';

import { userModel, userSchema } from './UserModel';

import * as bcrypt from 'bcrypt';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    constructor() {
        super(userModel);
    }

    public findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return super.findOne(query).lean();
    }

    public find(query, projection?: any, options?: any): any {
        return super.find(query, projection, options);
    }

    public create(data: any): Promise<IUserModel> {
        const id = UserRepository.generateObjectId();
        const model = new userModel({
            _id: id,
            createdAt: Date.now(),
            originalId: id,
            ...data,
        });
        return model.save();
    }

    public update(data: any): Promise<IUserModel> {
        if ('password' in data) {
            const salt = bcrypt.genSaltSync(10);
            const hashedPass = bcrypt.hashSync(data.password, salt);
            data.password = hashedPass;
        }
        console.log('UserRepository : update ', data);
        return super.update(data);
    }

    public list1( sort, skip, limit, searchBy) {
        return super.list( sort, skip, limit, searchBy);
     }
}