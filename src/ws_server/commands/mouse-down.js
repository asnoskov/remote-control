import { mouse, down } from '@nut-tree/nut-js';

const mouseDownCommand = {
    commandName: 'mouse_down',
    run: async (args, sendResult) => {
        const offset = Number(args[0]);
        await mouse.move(down(offset));
    }
}

export { mouseDownCommand };