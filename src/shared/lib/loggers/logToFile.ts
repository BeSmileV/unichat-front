import {LogLevel, logToFileMain} from "./logToFileMain";

export function logToFile(message: string, level: LogLevel = 'info') {
    if (process.env.NODE_ENV !== 'production' && process.env.LOGGER) {
        logToFileMain(message, level)
    }
}
