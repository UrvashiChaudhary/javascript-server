import * as mongoose from 'mongoose';
//console.log(mongoose);
class Database{
    // static open(){

    //     console.log("Inside open");
    //     mongoose.connect('mongodb://localhost:27017/express-training',{useUnifiedTopology: true , useNewUrlParser: true }, (err) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log("Successfully connected to mongoDB");
    //     });

    // }
    static open (mongo_url){
        
        
        return new Promise((resolve, reject) => {
            console.log("Inside open method");
            mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
            if(err){
                console.log("bdsbf");
                console.log(err);
                reject(err);
                return;
            }
            resolve(null);
        })
    });
}
    static disconnect(){
        console.log("Inside disconnect");
    }
}
export default Database;