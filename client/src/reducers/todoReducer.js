const todoReducer = (state= {todos:[]}, action, ) => {
  switch (action.type) {
    case 'GET_TODO':
    // console.log(action);
      return Object.assign({}, state, {todos: action.payload}) //action.payload

    case 'CREATE_TODO':
      // return Object.assign({}, state)
      // console.log(action.payload);
      let newState =  {
        id: Number(state.todos[state.todos.length - 1].id) +1,
        title: action.payload,
        completed: ''
      }
      let concate = state.todos.concat(newState)
      // console.log(concate);
      fetch('http://localhost:4000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: Number(state.todos[state.todos.length - 1].id) + 1,
          title: action.payload,
          completed: ''
        })
      }).then((result)=> {
        return result.json()
      })


      return Object.assign({}, state, {todos: concate})
    default:
      return state
  }
}



export default todoReducer
