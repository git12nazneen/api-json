function loadDataUsers3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData2(data))
}

function displayData2(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}