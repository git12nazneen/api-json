function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}

// 
// get the container element where you want to add the new elents
// create child element 
// set innertext or innerhtml
// appenchild
// 


function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container');

    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post);
        postDiv.innerHTML=`
        <h4>User-${post.userId}</h4>
        <h4>Post:${post.body}</h4>
        <h4>Post Description${post.title}</h4>
        `
        postsContainer.appendChild(postDiv);
    }
}
loadPosts();