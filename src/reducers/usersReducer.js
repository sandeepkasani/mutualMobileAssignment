const initialState = {
  users:null,
  selectedUser:null
}

export default UsersReducer = (state = initialState, action)=>{
  switch(action.type){
    case "SET_USERS":
      var usersObj = {};
      action.payload.map(user=>{
        usersObj[user.id] = user
      })
      console.log(usersObj);
      return {...state, users: usersObj}
    case "SELECT_USER":
      var user = state.users[action.payload]
      return {...state, selectedUser: user}
    default:
      return state
  }
}
