import { mouse, right } from '@nut-tree/nut-js';

const mouseRightCommand = {
    commandName: 'mouse_right',
    run: async (args, sendResult) => {
        const offset = Number(args[0]);
        await mouse.move(right(offset));
    }
}

export { mouseRightCommand };