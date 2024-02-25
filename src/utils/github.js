import fetch from 'node-fetch';

export async function getOpenPullRequests(repo) {
    const url = `https://api.github.com/repos/${repo}/issues?q=is:open+is:issue+label=good-first-issue`;
    const response = await fetch(url);
    return response.json();
}
