const initialState = {
  posts:null,
  selectedPost:null
}

export default UsersReducer = (state = initialState, action)=>{
  switch(action.type){
    case "SET_POSTS":
      var postsObj = {};
      action.payload.map(post=>{
        postsObj[post.id] = post
      })
      return {...state, posts: postsObj}
    case "SELECT_POST":
      var post = state.posts[action.payload]
      return {...state, selectedPost: post}
    default:
      return state
  }
}
