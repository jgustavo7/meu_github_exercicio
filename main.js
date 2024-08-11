document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/jgustavo7')
        .then (function(res){
            return res.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
        
        fetch('https://api.github.com/users/jgustavo7/followers')
        .then(res => res.json())
        .then(followers => {
            followersElement.innerText = followers.length;
        });

        fetch('https://api.github.com/users/jgustavo7/followers')
        .then(res => res.json())
        .then(following => {
            followingElement.innerText = following.length;
        });
})
.catch(function(error) {
    console.log('Ocorreu um erro:', error);
});