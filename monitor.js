import fetch from 'node-fetch';
import fs from 'fs';
import { log } from 'console';

const repositories = [
    'nodejs/node',
    'facebook/react-native',
    'elixir-lang/elixir'
];

function saveLogs(logs) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${logs}\n`;

    fs.appendFile('logs.txt', logMessage, (err) => {
        if (err) {
            console.error('Erro ao salvar logs: ', err);
        }
    });
}

async function checkNewPullRequests() {
    try {
        for (const repo of repositories) {
            const url = `https://api.github.com/repos/${repo}/pulls?state=open`;
            const response = await fetch(url);
            const pullRequests = await response.json();
            
            if (pullRequests.length > 0) {
                console.log(`Novas pull requests encontradas em ${repo}:`);
                pullRequests.forEach(pullRequest => {
                    console.log(`- ${pullRequest.title} (${pullRequest.html_url})`);
                });
                console.log(`Novas pull requests encontradas em ${repo}`);
                saveLogs(`Novas pull requests encontradas em ${repo}`);
            } else {
                console.log(`Nenhuma nova pull request em ${repo}.`);
                saveLogs(`Nenhuma nova pull request em ${repo}`);
            }
        }
    } catch (error) {
        console.error('Erro:', error);
        saveLogs(`Erro: ${error.message}`);
    }
}

checkNewPullRequests();
