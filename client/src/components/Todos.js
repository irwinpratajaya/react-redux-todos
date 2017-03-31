import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import fetchTodos from '../actions/todosAction'

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      keyword: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/todos', {method: 'get'})
    .then((result)=> {
      return result.json()
    })
    .then(data => {
      this.props.fetchTodos(data)
    })
    // this.props.fetchTodos()
  }

  // createTodo(event) {
  //   this.setState({
  //     keyword: event.target.value
  //   })
  // }

  render() {
    return (
      <div >
        <p>Hello World!</p>
        <ul>

          {this.props.todos.map((item, index) => {
            return (
              <li key={index}>{item.id} - {item.title} {item.completed}</li>
            )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchTodos: () => dispatch(fetchTodos())
    fetchTodos: (results) => dispatch({
      type: 'GET_TODO',
      payload: results
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)
