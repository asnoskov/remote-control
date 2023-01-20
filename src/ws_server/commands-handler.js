const UNKNOWN_COMMAND_MESSAGE = 'Unknown command';
const OPERATION_FAILED_MESSAGE = 'Operation failed';
const commandsMap = {};

const handleCommandMessage = async (commandMessage, sendAnswer) => {
    const commandParts = commandMessage.toString().split(' ');
    const commandName = commandParts[0].trim().toLocaleLowerCase();
    const command = commandsMap[commandName];
    if (command) {
        try {
            const commandArgs = commandParts.slice(1, commandParts.length);
            await command.run(commandArgs, sendAnswer);
        }
        catch (e) {
            console.log(OPERATION_FAILED_MESSAGE);
        }           
    }
    else {
        console.log(UNKNOWN_COMMAND_MESSAGE);
    }
};

const registerCommands = (commands) => commands.forEach(c => commandsMap[c.commandName] = c );

export default {
    registerCommands,
    handleCommandMessage
};