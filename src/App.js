import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
	constructor() {
		super();

		this.state = {
			message: 'Hello, I am a state',
			newTodo: '',
			todos: [{
				title: 'Learn React',
				done: false
			}, {
				title: 'Learn JSX',
				done: false
			}] 
		}; 
	}
	
	newTodoChanged(event) {
		this.setState({
			newTodo: event.target.value
		});
	}

	formSubmitted(event) {
		event.preventDefault();
		this.setState({
			newTodo: '',
			todos: [...this.state.todos, {
				title: this.state.newTodo,
				done: false
			}] 
		}); 
	}

	toggleTodoDone(event, index) {
		console.log(event.target.checked);
		const todos = [...this.state.todos]; // copy the array
		todos[index] = {...todos[index]}; // copy the todo
		todos[index].done = event.target.checked; // update done property on copied
		this.setState({
			todos
		}); 
	}

	removeTodo(index) {
		const todos = [...this.state.todos]; // copy the array
		todos.splice(index, 1);
		this.setState({
			todos
		});
	}

	allDone() {
		const todos = this.state.todos.map(todo => {
			return {
				title: todo.title,
				done: true
			}
		});

		this.setState({
			todos
		});
	}

	render() {
		return (
			<div className="App">
				<h3>{this.state.message}</h3>
				<NewTodoForm
					newTodo={this.state.newTodo}
					formSubmitted={this.formSubmitted.bind(this)}
					newTodoChanged={this.newTodoChanged.bind(this)}
				/>
				<button onClick={() => this.allDone()}>All Done</button>
				<TodoList
					todos={this.state.todos}
					toggleTodoDone={this.toggleTodoDone.bind(this)}
					removeTodo={this.removeTodo.bind(this)}
				/>
			</div>
		); 
	}
}

export default App;
