import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:8080/api/'

export default class AddTodoComponent extends Component {
	constructor(props) {
		super(props)

		this.onTaskChange = this.onTaskChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)

		this.state = { task: '' }
	}

	refreshPage() {
		window.location.reload(false)
	}

	onTaskChange(e) {
		this.setState({
			task: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault()
		const todoObject = {
			task: this.state.task
		}
		axios.post(SERVER_URL + 'create-todo', todoObject)
			.then(res => { console.log(res.data) })
		
		this.setState({ task: '' })
		this.refreshPage()
	}

	render() {
		return (
			<div>
				<h1 className="mb-3"><strong>Todo List App</strong></h1>
				<form className="form-inline" onSubmit={this.onSubmit}>
					<div className="form-group row">
						<div className="col-10">
							<input
								type="text"
								className="form-control"
								value={this.state.task}
								placeholder="create a new task"
								onChange={this.onTaskChange}
							/>
						</div>
						<div className="col-2">
							<input
								type="submit"
								value="+ Create"
								className="btn btn-primary"
							/>
						</div>
					</div>
				</form>
			</div>
		)
	}
}