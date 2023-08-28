
function loadData(){
const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
.then(response => response.json())
.then(json => console.log(json))
}
  
// another way
const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
.then(Response => Response.json())
.then(json => console.log(json))


// another
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
