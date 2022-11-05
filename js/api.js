function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}

function displayUsers(data){
    for (const user of data){
        console.log(user.name)
    }
}