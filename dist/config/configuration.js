"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
console.log(dotenv);
const envVars = require('dotenv').config();
console.log("Inside config", envVars);
const config = envVars.parsed;
Object.freeze(config);
exports.default = config;
//# sourceMappingURL=configuration.js.map