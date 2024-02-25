import fs from 'fs/promises';

export async function readStoredIssues() {
    try {
        const data = await fs.readFile('stored_issues.json');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        } else {
            throw error;
        }
    }
}

export async function writeStoredIssues(issues) {
    await fs.writeFile('stored_issues.json', JSON.stringify(issues, null, 2));
}
