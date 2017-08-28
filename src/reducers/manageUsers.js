export default function manageUsers(state = {users: []}, action){

  switch (action.type) {
    case "ADD_USER":
      let newState = state
      console.log(action.payload)
      
      newState.users.push(action.payload)
      return newState
    default:
      return state
  }
}
