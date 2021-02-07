//Could use Axios. Going for the native fetch api

export function getPosts(){
  return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export function getUsers(){
  return fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
}
