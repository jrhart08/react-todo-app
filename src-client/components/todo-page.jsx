import React, { Component } from 'react'
import TodoForm from './todo-form'
import TodoList from './todo-list'
import TodoTitle from './todo-title'
import {createTodo, deleteTodo} from '../services/todo'

export default class TodoPage extends Component {
  constructor() {
    super()

    // this component's state
    this.state = {
      todos: []
    }

    // bind once here or each time in render()
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(val) {
    // create new todo item
    createTodo(val).then(todo => {
        // append new todo item
        this.setState({
          todos: [...this.state.todos, todo]
        })
    })
  }

  removeTodo(id) {
    deleteTodo(id).then(() => {
      // get all but selected
      const remaining = this.state.todos.filter(todo => todo.id !== id)

      // remove selected
      this.setState({
        todos: remaining
      })
    })
  }

  render() {
    return (
      <div>
        <TodoTitle todos={[...this.state.todos]} />
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={[...this.state.todos]}
          remove={this.removeTodo}
        />
      </div>
    )
  }
}
