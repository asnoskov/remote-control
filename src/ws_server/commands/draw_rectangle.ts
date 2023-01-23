import { mouse, right, left, up, down, Point, Button } from '@nut-tree/nut-js';
import { Command } from './interfaces/command';

const drawRectangleCommand: Command = {
    commandName: 'draw_rectangle',
    run: async (args, sendResult) => {
        const width = Number(args[0]);
        const height = Number(args[1]);

        mouse.config.mouseSpeed = 500;
        
        await mouse.pressButton(Button.LEFT);
        await mouse.move(right(width));
        await mouse.move(down(height));
        await mouse.move(left(width));
        await mouse.move(up(height));
        await mouse.releaseButton(Button.LEFT);
    }
}

export { drawRectangleCommand };