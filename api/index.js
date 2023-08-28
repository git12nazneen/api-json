function loadDataUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}
// url theke name, email ber korar process
function displayData(data){
    for(const user of data)
    console.log(user.name)
}