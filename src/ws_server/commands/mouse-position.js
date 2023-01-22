import { mouse, up } from '@nut-tree/nut-js';

const mousePositionCommand = {
    commandName: 'mouse_position',
    run: async (args, sendResult) => {
        const position = await mouse.getPosition();
        sendResult(`mouse_position ${position.x},${position.y}`);
    }
}

export { mousePositionCommand };