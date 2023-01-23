import { mouse, right } from '@nut-tree/nut-js';
import { Command } from './interfaces/command';

const mouseRightCommand: Command = {
    commandName: 'mouse_right',
    run: async (args, sendResult) => {
        const offset = Number(args[0]);
        await mouse.move(right(offset));
    }
}

export { mouseRightCommand };