'use server'

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export async function logToFileMain(message: string, level: LogLevel = 'info'): Promise<void> {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${level.toUpperCase()}: ${message}\n`;

    console.log(logMessage);

    if (typeof process !== 'undefined' && process.versions?.node) {
        // Только в Node.js среде
        const fs = await import('fs');
        const path = await import('path');

        const logFilePath = path.resolve(process.cwd(), 'logs', 'application.log');

        try {
            fs.mkdirSync(path.dirname(logFilePath), {recursive: true});
            fs.appendFileSync(logFilePath, logMessage, 'utf8');
        } catch (error) {
            console.error('Failed to write log:', error);
        }
    } else {
        // В Edge среде — просто ничего не делать или логировать в консоль
        console.warn('Logging to file skipped: not in Node.js environment.');
    }
}
