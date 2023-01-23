import { mouse, up } from '@nut-tree/nut-js';
import { Command } from './interfaces/command';

const mousePositionCommand: Command = {
    commandName: 'mouse_position',
    run: async (args, sendResult) => {
        const position = await mouse.getPosition();
        sendResult(`mouse_position ${position.x},${position.y}`);
    }
}

export { mousePositionCommand };