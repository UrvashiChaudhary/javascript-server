
import { config } from 'dotenv';
config();
import { IConfig } from './IConfig';
const envVars : NodeJS.ProcessEnv = process.env;
const configurations = Object.freeze({
    env: envVars.node_env,
    port: envVars.port,

}) as IConfig;

export default configurations;
