import { drawRectangleCommand } from './draw_rectangle';
import { Command } from './interfaces/command';

const drawSquareCommand: Command = {
    commandName: 'draw_square',
    run: async (args, sendResult) => {
        const size = Number(args[0]);
        await drawRectangleCommand.run([size, size], sendResult);
    }
}

export { drawSquareCommand };