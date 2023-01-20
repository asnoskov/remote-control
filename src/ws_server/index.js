import WebSocket, { WebSocketServer } from 'ws';
import { mouseUpCommand } from './commands/mouse-up.js';
import commandsHandler from './commands-handler.js';

const createWsServer = (server) => {
    const ws = new WebSocketServer({ server });

    commandsHandler.registerCommands([mouseUpCommand]);
    ws.on('connection', function connection(ws) {
        console.log('ws: connection established');
        ws.on('message', (data) => commandsHandler.handleCommandMessage(data, ws.send));
      });
};

export { createWsServer };