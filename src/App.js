import React, { Component } from 'react';
import './App.css';

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
		const todos = [...this.state.todos];
		const todo = {...todos[index]};
		todo.done = event.target.checked;
		this.setState({
			todos
		}); 
	}

	render() {
		return (
			<div className="App">
				<h3>{this.state.message}</h3>
				<form onSubmit={this.formSubmitted.bind(this)}>
					<label htmlFor="newTodo">New Todo</label>
					<input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
					<button type="submit">Add Todo</button>
				</form>
				<ul>
					{this.state.todos.map((todo, index) => {
						return (
							<li key={todo.title}>
								<input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" /> 
								{todo.title}
							</li>
						)
					})}
				</ul>
			</div>
		); 
	}
}

export default App;
