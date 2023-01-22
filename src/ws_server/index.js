import WebSocket, { WebSocketServer } from 'ws';
import { mouseUpCommand } from './commands/mouse-up.js';
import { mouseDownCommand } from './commands/mouse-down.js';
import { mouseLeftCommand } from './commands/mouse-left.js';
import { mouseRightCommand } from './commands/mouse-right.js';
import commandsHandler from './commands-handler.js';

const commands = [mouseUpCommand, mouseDownCommand, mouseLeftCommand, mouseRightCommand];

const createWsServer = (server) => {
    const ws = new WebSocketServer({ server });

    commandsHandler.registerCommands(commands);
    ws.on('connection', function connection(ws) {
        console.log('ws: connection established');
        ws.on('message', (data) => commandsHandler.handleCommandMessage(data, ws.send));
      });
};

export { createWsServer };