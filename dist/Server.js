"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        return this;
    }
    setupRoutes() {
        const { app } = this;
        app.get('./health-check', (req, res, next) => {
            res.send('I am OK');
        });
        return this;
    }
    run() {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running,${port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map