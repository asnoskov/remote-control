import { WebSocketServer } from 'ws';
import { mouseUpCommand } from './commands/mouse-up';
import { mouseDownCommand } from './commands/mouse-down';
import { mouseLeftCommand } from './commands/mouse-left';
import { mouseRightCommand } from './commands/mouse-right';
import { mousePositionCommand } from './commands/mouse-position';
import { drawCircleCommand } from './commands/draw_circle';
import { drawRectangleCommand } from './commands/draw_rectangle';
import { drawSquareCommand } from './commands/draw_square';
import commandsHandler from './commands-handler';
import { Server } from 'http';

const commands = [
  mouseUpCommand, mouseDownCommand, mouseLeftCommand, mouseRightCommand,
  mousePositionCommand, drawCircleCommand, drawRectangleCommand, drawSquareCommand];

const createWsServer = (server: Server) => {
    const ws = new WebSocketServer({ server });

    commandsHandler.registerCommands(commands);
    ws.on('connection', function connection(ws) {
        console.log('ws: connection established');
        ws.on('message',
          (data) => commandsHandler.handleCommandMessage(data, (data: any, cb?: (err?: Error) => void) => { 
            ws.send(data, cb);
          }));
      });
};

export { createWsServer };