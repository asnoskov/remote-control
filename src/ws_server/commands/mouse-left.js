import { mouse, left } from '@nut-tree/nut-js';

const mouseLeftCommand = {
    commandName: 'mouse_left',
    run: async (args, sendResult) => {
        const offset = Number(args[0]);
        await mouse.move(left(offset));
    }
}

export { mouseLeftCommand };