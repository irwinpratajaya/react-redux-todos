import React, { Component } from 'react';
import { connect } from 'react-redux'

// const Input = (props) => (
class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {this.submitTodo(event)}}>
          <input type="text" name="search" placeholder="new todo list" onChange={(event) => {this.createTodo(event)}} /><button>send</button>
        </form>
      </div>
    )
  }

  createTodo(event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  submitTodo(event) {
    event.preventDefault()
    // console.log(this.state.newTodo);
    this.props.createTodo(this.state.newTodo)
  }
}
// )


const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (newTodo) => dispatch({
      type: 'CREATE_TODO',
      payload: newTodo
    })
  }
}


export default connect(null,mapDispatchToProps) (Input)
