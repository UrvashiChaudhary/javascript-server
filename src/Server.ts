import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import { IConfig } from './config/IConfig';
import mainRouter from './router';
import Database from './libs/Database';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';

class Server {
    app: express.Express;
    constructor( private config: IConfig ) {
        this.config = config;
        this.app = express();
    }

    bootstrap() {
        this.initBodyParser();
        this.setupRouts();
        return this;
    }
    initSwagger = () => {
        const options = {
            definition: {
                info: {
                    title: 'JavaScript-Server API Swagger',
                    version: '1.0.0',
                },
                securityDefinitions: {
                    Bearer: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'headers'
                    }
                }
            },
            basePath: '/api',
            swagger: '4.1',
            apis: ['./src/controllers/**/routes.ts'],
        };
        const swaggerSpec = swaggerJsDoc(options);
        return swaggerSpec;
    }
    setupRouts() {
        const { app } = this;
        app.use((req: Request, res: Response, next: NextFunction) => {
            console.log('Inside First MidleWare');
            next();
        });
        app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));

        app.use('/health-check', (req: Request, res: Response, next: NextFunction) => {
            console.log('Inside Second MidleWare');
            res.send('I am OKK');

        });

        this.app.use('/api', mainRouter);
        app.use('/health-check', (req: Request, res: Response) => {
            console.log('Inside Second MidleWare');
            res.send('I am fine');
        });

        app.use(notFoundHandler);
        app.use(errorHandler);

        return this;
    }

    initBodyParser() {
        this.app.use(bodyParser.json());
    }


    public run() {

        const { app, config: { port, MONGO_URL } } = this;
        Database.open(MONGO_URL)
            .then((res) => {
                console.log('Successfully connected to Mongo');
                this.app.listen(port, () => {
                    console.log(`App is running on port ${port}`);
                });
            })
            .catch(err => { console.log(err); });
    }
}
export default Server;