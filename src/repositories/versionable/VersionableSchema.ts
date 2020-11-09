import * as mongoose from 'mongoose';

class versionableSchema extends mongoose.Schema{

    constructor(options: any, collection: any){
        const versionedOptions = Object.assign({
            createdAt:{
                default: Date.now,
                type: Date,
            },
            deletedAt:{
                require: false,
                type: Date,
            },
            originalId: {
                require: false,
                type: String,
            }}, options);
        super(versionedOptions, collection);

    }

}
