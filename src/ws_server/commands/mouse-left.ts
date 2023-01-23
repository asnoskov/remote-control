import { mouse, left } from '@nut-tree/nut-js';
import { Command } from './interfaces/command';

const mouseLeftCommand: Command = {
    commandName: 'mouse_left',
    run: async (args, sendResult) => {
        const offset = Number(args[0]);
        await mouse.move(left(offset));
    }
}

export { mouseLeftCommand };