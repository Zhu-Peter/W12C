//  POST request that creates a "post"
axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(successPosts)
  .catch(failureFunction);

function successPosts(request){
  console.log(request)
  document.getElementById(`success`).insertAdjacentHTML(`beforeend`, `<p>POST success status ${request.status}</p>`)
}

//  PATCH request that updates a "post"
axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts/1`,
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(successPatch)
  .catch(failureFunction);

function successPatch(request){
  console.log(request)
  document.getElementById(`success`).insertAdjacentHTML(`beforeend`, `<p>PATCH success status ${request.status}</p>`)
}

//  DELETE request that deletes a "post"
axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts/1`,
    method: 'DELETE'
  })
  .then(successDelete)
  .catch(failureFunction);

function successDelete(request){
  console.log(request)
  document.getElementById(`success`).insertAdjacentHTML(`beforeend`, `<p>DELETE success status ${request.status}</p>`)
}

//  GET request that grabs all "posts"
axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts`,
  })
  .then(postPosts)
  .catch(failureFunction);

function postPosts(request) {
    // console.log(request)
  let posts = request.data
  document.getElementById(`posts`).insertAdjacentHTML(
    `beforebegin`, `<h1>GET these posts</h1>`);
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
