export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...friends, action.friend}
    case: 'REMOVE_FRIEND':
      return {}
    
  }
}
