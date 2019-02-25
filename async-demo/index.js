
console.log('Before');
getUser(1, (user) => {
   
getRepositories(user.gitHubUsername, (repos) =>{
    getCommits(repo, displayCommits);
})

});
console.log('After');

function displayCommits(commits) {
    console.log(commits);
}
function getCommits(repos) {
    getCommits(repo, displayCommits);
}

/*
function getUser(id, callback){ 
    setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'mosh' });
    return; 
    }, 2000);
}
*/
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repos...');
            resolve({ username: username, repos: ['repo1', 'repo2', 'repo3'] });
            
        }, 2000);
    })
    
    
}
/////////////////////////


getUser(5)
    .then(user => getRepositories(user.repos));


function getUser(id) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ id: id, repo: 'This is the repo thing'});
        }, 2000);

    });
}





























