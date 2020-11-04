
import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';
const envVars : NodeJS.ProcessEnv = process.env;
const configurations = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,

}) as IConfig;

export default configurations;
