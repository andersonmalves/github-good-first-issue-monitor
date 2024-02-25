import { repositories } from './utils/repositories.js';
import { getOpenPullRequests } from './utils/github.js';
import { readStoredIssues, writeStoredIssues } from './utils/storage.js';
import { saveLogs } from './utils/logs.js';

async function checkGoodFirstIssues() {
    const storedIssues = await readStoredIssues();

    for (const repo of repositories) {
        const issues = await getOpenPullRequests(repo);

        const newIssues = issues.filter(issue => !storedIssues.includes(issue.id));
        
        if (newIssues.length > 0) {
            console.log(`Good first issues encontradas em ${repo}:`);
            newIssues.forEach(issue => {
                console.log(`- ${issue.title} (${issue.html_url})`);
        });
            // console.log(`achamos algo novo!`);
            saveLogs(`Novas pull requests encontradas em ${repo}`);
            storedIssues.push(...newIssues.map(issue => issue.id));
        } else {
            console.log(`Nenhuma good first issue nova em ${repo}.`);
            saveLogs(`Nenhuma nova pull request em ${repo}`);
        }
    }

    await writeStoredIssues(storedIssues);
}

checkGoodFirstIssues().catch(error => {
    error('Ocorreu um erro durante o monitoramento:', error);
    saveLogs(`Erro: ${error.message}`);
    process.exit(1);
});
