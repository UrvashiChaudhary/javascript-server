// import the server and config files
import Server from './Server';
import config from './config/configuration';
console.log('config is ' , config);
const server = new Server (config);
server.bootstrap().run();