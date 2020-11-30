import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    private model: M;
    constructor(model) {
        this.model = model;
    }

    public async create(options: any): Promise<D> {
        console.log('VersioningRepository :: create ', options);
        const id = VersioningRepository.generateObjectId();
        const model = new this.model({
            ...options,
            _id: id,
            originalId: id
        });
        return await model.save();
    }
    count = () => {
        return this.model.countDocuments();
    }

    public getAll(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedBy: undefined, ...query };
        return this.model.find(finalQuery, projection, options);
    }

    public findOne(query: any): mongoose.DocumentQuery<D, D> {
        const finalQuery = { deleteAt: undefined, ...query };
        return this.model.findOne(finalQuery);
    }

    public find(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deleteAt: undefined, ...query };
        return this.model.find(finalQuery, projection, options);
    }

    public async update(data: any, id: string): Promise<D> {
        // console.log("Looking for privious valid document ");
        let originalData;
        const prev = await this.findOne({ originalId: id, deletedAt: undefined, deletedBy: undefined });
        originalData = prev;
        console.log('id...', id);
        this.updateOne(originalData);
        console.log('originaldata', originalData);
        console.log('data', data);
        const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), data);
        // console.log("newData : ",newData);
        newData._id = VersioningRepository.generateObjectId();
        delete newData.deletedAt;
        const model = new this.model(newData);
        return model.save();
    }

    public async updateOne(originalData: any) {

        const oldId = originalData._id;
        const oldModel = {
            ...originalData,
            deletedBy: oldId,
            deletedAt: Date.now(),
        };
        try {
            const res = await this.model.updateOne({ originalId: oldId }, oldModel);
            if (res === null) {
                throw Error;
            }
        }
        catch (err) {
            console.log('errror is : ', err);
        }
    }
    async list(sort, skip, limit): Promise<D[]> {
        return this.model.find({ }).sort(sort).skip(Number(skip)).limit(Number(limit));
    }
    // countTrainee = () => {
    //     return this.model.countDocuments({ role: 'trainee', deletedAt: {$: undefined}});
    // }

    public async delete(id: any, remover: any) {

        let originalData;
        try {
            const data = await this.findOne({ originalId: id, deletedAt: undefined, deletedBy: undefined });
            if (data === null) {
                throw undefined;
            }

            originalData = data;
            const oldId = originalData._id;

            const modelDelete = {
                ...originalData,
                deletedBy: oldId,
                deletedAt: Date.now(),
            };
            try {
                const res = await this.model.updateOne({ originalId: oldId }, modelDelete);
                if (res === null) {
                    throw undefined;
                }
            }
            catch (err) { console.log('errror is : ', err); }
        }
        finally { console.log(); }
    }
}