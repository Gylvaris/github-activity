console.log("Check a user's GitHub activity!\nPlease provide a username.");
const username = prompt("GitHub username:") || "";

async function getUserEvents(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    return await response.json();
};

async function displayUserActivity(username:string) {
    const events = await getUserEvents(username);
    console.log(events)
};

displayUserActivity(username)