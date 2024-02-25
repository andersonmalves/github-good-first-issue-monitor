import fs from 'fs/promises';

async function saveLogs(logs) {
    try {
        const timestamp = new Date().toISOString();
        const logMessage = `${timestamp}: ${logs}\n`;

        await fs.appendFile('logs.txt', logMessage);
    } catch (error) {
        console.error('Erro ao salvar logs:', error);
    }
}

export { saveLogs };
