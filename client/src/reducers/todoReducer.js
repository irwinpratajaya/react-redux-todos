const todoReducer = (state= [], action, ) => {
  switch (action.type) {
    case 'GET_TODO':
      return action.payload
    default:
      return state
  }
}

export default todoReducer
