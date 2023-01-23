export interface Command {
    commandName: string;
    run: (
        args: (string | Number)[],
        sendResult: (data: any, cb?: (err?: Error) => void) => void
    ) => void;
}