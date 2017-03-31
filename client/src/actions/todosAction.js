export const getTodos = results => ({
  type: 'GET_TODO',
  payload: results
});


export const fetchTodos = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/todos', {
      method: 'get',
    })
    .then(result => {
      return result.json()
    })
    .then(data => {
      dispatch(getTodos(data));
    })
  }
}
