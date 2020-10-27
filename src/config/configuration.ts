import * as dotenv from 'dotenv';
console.log(dotenv);
import { IConfig } from './IConfig';

const envVars = require('dotenv').config();
console.log("Inside config", envVars);
const config: IConfig = envVars.parsed;

Object.freeze(config);
export default config;