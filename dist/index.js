"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./config/configuration");
const Server_1 = require("./Server");
console.log('config is', configuration_1.default);
const server = new Server_1.default({
    port: 9000,
});
server.bootstrap().run();
//# sourceMappingURL=index.js.map