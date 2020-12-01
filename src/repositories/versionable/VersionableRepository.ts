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

    // public count(query: any): Query<number> {
    //     const finalQuery = { deleteAt: undefined, ...query };
    //     return this.model.countDocuments(finalQuery);
    // }
    count = () => {
        return this.model.countDocuments();
    }

    public getAll(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deletedAt: undefined, ...query };
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
    public invalidate(id: string): DocumentQuery<D, D> {
        const query: any = { originalId: id, deletedAt: { $exists: false } };
        const data: any = { deletedAt: Date.now() };
        return this.model.updateOne(query, data);
        }
    public invalidateUpdate(id: any): DocumentQuery<D, D> {
        return this.model.update({ originalId: id, updatedAt: null }, {});
    }

    public async update(data: any): Promise<D> {
        const prev = await this.findOne({ originalId: data.originalId, deletedAt: undefined, deletedBy: undefined });
        console.log('prev', prev);

        if(prev){
            await this.invalidate(data.originalId);
        }
        else {
            return undefined;
        }
        const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
        newData._id = VersioningRepository.generateObjectId();
        delete newData.deletedAt;
        console.log('newData', newData);
        const model = new this.model(newData);
        console.log('model', model);
        return model.save();

    }
    
    async list(sort, skip, limit, searchBy): Promise<D[]> {
        return this.model.find({ deletedAt: undefined, ...searchBy}).sort(sort).skip(Number(skip)).limit(Number(limit));
    }
    
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