
import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';
const envVars: NodeJS.ProcessEnv = process.env;
const configurations = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    key: envVars.KEY,

}) as IConfig;

export default configurations;
