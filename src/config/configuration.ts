
import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';
const envVars: NodeJS.ProcessEnv = process.env;
const configurations = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    MONGO_URL: envVars.MONGO_URL,
    password: envVars.password,
    key: envVars.KEY,
    secretKey: envVars.secretKey

}) as IConfig;
export default configurations;
