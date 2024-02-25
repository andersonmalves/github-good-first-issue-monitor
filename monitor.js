import fetch from 'node-fetch';

const repositories = [
    'nodejs/node',
    'facebook/react-native',
    'elixir-lang/elixir'
];

async function checkNewPullRequests() {
    for (const repo of repositories) {
        const url = `https://api.github.com/repos/${repo}/pulls?state=open`;
        const response = await fetch(url);
        const pullRequests = await response.json();
        
        if (pullRequests.length > 0) {
            console.log(`Novas pull requests encontradas em ${repo}:`);
            pullRequests.forEach(pullRequest => {
                console.log(`- ${pullRequest.title} (${pullRequest.html_url})`);
            });
            
            console.log(`achamos algo novo!`);

        } else {
            console.log(`Nenhuma nova pull request em ${repo}.`);
        }
    }
}

checkNewPullRequests();
