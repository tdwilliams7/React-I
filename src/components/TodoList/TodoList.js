import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{text: 'complete this assignment', completed: false}, {text: 'submit a PR', completed: false}],
      newTodo: '',
    }
    this.changeTodoInput = this.changeTodoInput.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  changeTodoInput(event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  addNewTodo() {
    const newTodo = this.state.newTodo;
    const todos = this.state.todos;
    const todoInput = document.querySelector('input');
    const errorMessage = document.getElementById('errorMessage')
    if (!newTodo.length) {
      errorMessage.textContent = 'Type something to do, yo!';
    } else {
      todos.push({text:newTodo, completed: false});
      errorMessage.textContent = '';
    }
    this.setState({
      todos,
      newTodo: '',
    })
    todoInput.focus();
  }

  handleEnter(e){
    if (e.keyCode === 13) {
      this.addNewTodo();
    }
  }

  completeTodo(event) {
    const todos = this.state.todos;
    const todoInput = document.querySelector('input');
    todos[event.target.value].completed = !todos[event.target.value].completed;
    this.setState({
      todos
    })
    todoInput.focus();
  }
  deleteTodo(event) {
    console.log(event.target.previousSibling)
    const target = event.target.parentNode.value;
    const todos = this.state.todos;
    const todoInput = document.querySelector('input');
    todos.splice(target, 1);
    this.setState({
      todos,
    });
    todoInput.focus();
    event.stopPropagation();
  }
  render(){
    return (
      <div>
          <input className="col-sm-8" type='text' value={this.state.newTodo}  onChange={this.changeTodoInput} onKeyDown={this.handleEnter} placeholder="New to do" autoFocus></input>
          <button className="col-sm-2" onClick={this.addNewTodo}>Add new todo</button>
          <div className="col-sm-2">{this.state.todos.length}</div>
          <div id='errorMessage'></div>
        <Todo todos={this.state.todos} completeTodo={this.completeTodo} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}


export default TodoList;
