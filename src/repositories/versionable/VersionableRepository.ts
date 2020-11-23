import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';
import IVersionableDocument from './IVersionableDocument';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    private model: M;
    constructor(model) {
        this.model = model;
    }

    public async create(options: any): Promise<D> {
        console.log('VersionableRepository :: create ', options);
        const id = VersionableRepository.generateObjectId();
        const model = new this.model({
            ...options,
            _id: id,
            originalId: id,
            createdAt: Date.now(),
            createdBy: id
        });
        return await model.save();
    }

    public count(query: any): Query<number> {
        const finalQuery = { deleteAt: undefined, ...query };
        return this.model.countDocuments(finalQuery);
    }

    public getAll(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deleteAt: undefined, ...query };
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
    public invalidate(id: any): DocumentQuery<D, D> {
        return this.model.update({ originalId: id, deletedAt: undefined }, {});
    }



    public async update(data: any, id: string): Promise<D> {
        let originalData;
        const prev = await this.findOne({ originalId: id, deletedAt: undefined, deletedBy: undefined });
        originalData = prev;
        this.updateOne(originalData);
        const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), data);
        newData._id = VersionableRepository.generateObjectId();
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
        this.model.updateOne({ originalId: oldId }, oldModel)
            .then((res) => {
                if (res === null) {
                    throw Error;
                }
            })
            .catch((err) => { console.log('errror is : ', err); });
    }

    public async delete(id: string, remover: string) {

        let originalData;

        await this.findOne({ id1: id, deletedAt: undefined })
            .then((data) => {
                if (data === null) {
                    // throw ' ';
                }

                originalData = data;
                const oldId = originalData._id;

                const modelDelete = {
                    ...originalData,
                    deletedAt: Date.now(),
                    deletedBy: remover,
                };

                this.model.updateOne({ _id: oldId }, modelDelete)
                    .then((res) => {
                        if (res === null) {
                            // throw ' ';
                        }
                    });

            });
    }
}