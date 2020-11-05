// create a class and define methods according to the ticket#39522
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import notFoundRoute from "./libs/routes/notFoundRoute";

import routes from './router';
import Database from './libs/Database';
class Server {
private app
constructor( private config ) {
this.app=express()
}
bootstrap() {
this.setupRouts()
return this;
}
setupRouts() {
const { app }=this;
app.get('/health-check',( req, res, next ) => {
res.send("I am fine");
});
app.use('/api',routes);
app.use(notFoundHandler);
app.use(errorHandler);
return this;
}
initBodyParser() {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
}
run() {

const {app, config:{ port ,mongo_url}}=this;
Database.open(mongo_url )
.then ((res) =>{
    console.log("Successfully inside mongoDB");
    this.app.listen(port,( err) => {
        if(err){
            console.log(err);
        }
        console.log(`App is running on port ${ port }`);
        
        
        
        });
})
.catch(err => console.log(err));
 return this;


       
        // app.use(notFoundHandler);
        // app.use(errorHandler);
}

}
export default Server;