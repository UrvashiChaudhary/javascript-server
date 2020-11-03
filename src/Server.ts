// create a class and define methods according to the ticket#39522
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import notFoundRoute from "./libs/routes/notFoundRoute";
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
return this;
}
run() {

const {app, config:{ port }}=this;
app.listen(port,( err ) => {
if( err ) {
console.log( err );
}
console.log(`App is running on port ${ port }`);
})

}

}
export default Server;