import { mouse, up } from '@nut-tree/nut-js';

const mouseUpCommand = {
    commandName: 'mouse_up',
    run: async (args, sendResult) => {
        const offset = Number(args[0]);
        await mouse.move(up(offset));
    }
}

export { mouseUpCommand };