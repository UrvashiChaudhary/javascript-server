import * as mangoose from 'mongoose'

export default interface IUserModel extends mangoose.Document {

    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
}