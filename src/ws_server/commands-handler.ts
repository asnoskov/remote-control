import { WebSocket } from "ws";
import Ws from "ws";
import { Command } from "./commands/interfaces/command";

const UNKNOWN_COMMAND_MESSAGE = 'Unknown command';
const OPERATION_FAILED_MESSAGE = 'Operation failed';
const commandsMap: { [name: string]: Command } = {};

const handleCommandMessage = async (commandMessage: Ws.RawData, sendAnswer: (data: any, cb?: (err?: Error) => void) => void) => {
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

const registerCommands = (commands: Command[]) => commands.forEach(c => commandsMap[c.commandName] = c );

export default {
    registerCommands,
    handleCommandMessage
};