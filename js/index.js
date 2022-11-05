const shop = {
    name: 'Xaiomi Store',
    address: 'Dhaka',
    products: ['mobile', 'laptop', 'tab'],
    isExpensive: true
}
const shopStringfied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringfied);

const converted = JSON.parse(shopStringfied);
console.log(converted);



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))



// function userLoad() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(jeson => console.log(jeson))
// }

function loadPost(users) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => post(data));
}
function userLoad(data) {
    const displayUsers = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        user.appendChild('li');
    }
}



// function masudApi(data) {
//     const massud = document.getElementById('masudAPis');
//     for (const user of data) {
//         const li = document.createElement('li');
//         li.innerText = user.title;
//         massud.appendChild(li);
//     }

// }

// function masudApi() {
//     fetch('https://genius-car-server-sigma.vercel.app/services')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }
