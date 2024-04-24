axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts`,
  })
  .then(postPosts)
  .catch(failureFunction);

function postPosts(request) {
    // console.log(request)
  let posts = request.data
  for(let i=0; i<posts.length; i++){
      document.getElementById(`posts`).insertAdjacentHTML(
        `beforeend`,
        `
        <div class="post">
        <h1>${posts[i].title}</h1>
        <p>${posts[i].body}</p>
        </div>
        `
      );

  }
}

function failureFunction(error) {
  console.log(error);
}
