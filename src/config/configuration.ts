import { IConfig } from './IConfig';
import * as dotenv from 'dotenv'
const envVars = dotenv.config();
const config = envVars.parsed;
export default config;
//const envVars = require ('dotenv').config()
console.log("inside config" , config);
//const config:IConfig = envVars.parsed;

Object.freeze( config );