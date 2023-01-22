import { mouse, down, Point, Button } from '@nut-tree/nut-js';

const getCirclePointCoords = (radius, angle) => {
    const x = radius * Math.sin(Math.PI * angle / 180);
    const y = radius * Math.cos(Math.PI * angle / 180);
    return { x, y };
}

const drawCircleCommand = {
    commandName: 'draw_circle',
    run: async (args, sendResult) => {
        const startPosition = await mouse.getPosition();
        const radius = Number(args[0]);
        const points = [];
        const step = 5;
        const speed = 50;
        for (let angle = 0; angle <= 360; angle += step) {
            const coords = getCirclePointCoords(radius, angle);
            const normalizedCoords = { x: coords.x, y: -coords.y };
            const absPoint = new Point(
                startPosition.x + normalizedCoords.x,
                startPosition.y + normalizedCoords.y);
            points.push(absPoint);
        }
        mouse.config.mouseSpeed = speed;
        await mouse.pressButton(Button.LEFT);
        await mouse.move(points);
        await mouse.releaseButton(Button.LEFT);
    }
}

export { drawCircleCommand };