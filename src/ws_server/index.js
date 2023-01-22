import WebSocket, { WebSocketServer } from 'ws';
import { mouseUpCommand } from './commands/mouse-up.js';
import { mouseDownCommand } from './commands/mouse-down.js';
import { mouseLeftCommand } from './commands/mouse-left.js';
import { mouseRightCommand } from './commands/mouse-right.js';
import { mousePositionCommand } from './commands/mouse-position.js';
import { drawCircleCommand } from './commands/draw_circle.js';
import { drawRectangleCommand } from './commands/draw_rectangle.js';
import { drawSquareCommand } from './commands/draw_square.js';
import commandsHandler from './commands-handler.js';

const commands = [
  mouseUpCommand, mouseDownCommand, mouseLeftCommand, mouseRightCommand,
  mousePositionCommand, drawCircleCommand, drawRectangleCommand, drawSquareCommand];

const createWsServer = (server) => {
    const ws = new WebSocketServer({ server });

    commandsHandler.registerCommands(commands);
    ws.on('connection', function connection(ws) {
        console.log('ws: connection established');
        ws.on('message',
          (data) => commandsHandler.handleCommandMessage(data, (data, cb) => { 
            ws.send(data, cb);
          }));
      });
};

export { createWsServer };