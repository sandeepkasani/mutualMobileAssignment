
export const setPosts = (data)=>{
  return {
    type: "SET_POSTS",
    payload: data
  }
}

export const selectPost = id =>{
  return {
    type: "SELECT_POST",
    payload: id
  }
}

export const setUsers = (data)=>{
  return {
    type: "SET_USERS",
    payload: data
  }
}

export const selectUser = (id)=>{
  return {
    type: "SELECT_USER",
    payload: id
  }
}
