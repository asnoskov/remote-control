import { httpServer } from './src/http_server/index';
import { createWsServer } from './src/ws_server/index';
import http from 'http';

const HTTP_PORT = 8181;
const WS_HTTP_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(`Start ws http server on the ${WS_HTTP_PORT} port!`);
const wsHttpServer = http.createServer();
createWsServer(wsHttpServer);
wsHttpServer.listen(WS_HTTP_PORT);