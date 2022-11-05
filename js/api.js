function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}

function displayUsers(data){
    const ul = document.getElementById('user-post');
    for (const user of data){
        const li = document.createComment('li');
        li.innerText = user.title;
        ul.appendChild("li");
    }
}