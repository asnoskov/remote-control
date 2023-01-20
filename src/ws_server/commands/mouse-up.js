const mouseUpCommand = {
    commandName: 'mouse_up',
    run: async (args, sendResult) => {
        console.log(args);
    }
}

export { mouseUpCommand };