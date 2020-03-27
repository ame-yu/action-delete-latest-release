const { Octokit } = require("@octokit/rest");
const {env} = require ("process");
const token = env.INPUT_GITHUB_TOKEN
const repository = env.INPUT_REPOSITORY || env.GITHUB_REPOSITORY
const [owner, repo] = repository.split("/")

const octokit = new Octokit({
    auth: token
});


octokit.repos.getLatestRelease({
    owner,
    repo
}).then(res => {
    if(!res.data){
        console.error("💡 No latest release found, skip delete.");
        return
    }
    const release_id = res.data.id
    octokit.repos.deleteRelease({
        owner,
        repo,
        release_id
    })
}).catch(
    err =>{
        if(err.status === 404){
            console.error("💡 No latest release found, skip delete.");
            return
        }
        console.error("❌ Can't get latest Release");
        console.error(err);
    }
)


