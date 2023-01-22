import { drawRectangleCommand } from './draw_rectangle.js';

const drawSquareCommand = {
    commandName: 'draw_square',
    run: async (args, sendResult) => {
        const size = Number(args[0]);
        await drawRectangleCommand.run([size, size], sendResult);
    }
}

export { drawSquareCommand };