import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal'

const SERVER_URL = 'http://localhost:8080/api/'

export default class ViewTodoComponent extends Component {
	taskObj = {
		_id: '',
		task: ''
	}

	state = {
		modalIsOpen: false
	}

	openModal = data => {
		this.setState({ modalIsOpen: true })
		this.setTodoVal(data)
	}

	setTodoVal = data => {
		this.taskObj = {
			_id: data._id,
			task: data.task
		}
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}

	constructor(props) {
		super(props)

		this.state = { todos: [] }

		this.deleteTodo = this.deleteTodo.bind(this)
	}

	componentDidMount() {
		this.getTodos()
	}

	getTodos() {
		const headers = { 'Content-Type': 'application/json' }

		axios.get(SERVER_URL, { headers })
			.then(response => { this.setState({ todos: response.data }) })
			.catch(error => { console.error(error) })
	}

	deleteTodo(id) {
		axios.delete(SERVER_URL + "delete-todo/" + id)
			.then(res => { this.getTodos() })
			.catch(error => { console.log(error) })
	}

	onTaskChange(e) {
		this.taskObj = {
			_id: this.taskObj._id,
			task: e.target.value
		}

		var event = new Event('input', { bubbles: true })

		this.myInput.dispatchEvent(event)
	}

	refreshPage() {
		window.location.reload(false)
	}

	onUpdate = () => {
		axios.put(SERVER_URL + "update-todo/" + this.taskObj._id, this.taskObj)
			.then(res => {
				console.log('Todo updated ' + res)
				this.refreshPage()
			})
			.catch(error => { console.log(error) })
	}

	render() {
		const { todos } = this.state
		return (
			<>
				<ul className="list-group mt-3">
					{todos.map((data) => (
						<li key={data._id} className="list-group-item d-flex justify-content-between align-items-start">
							<div className="ms-2 me-auto">
							<div className="fw-bold">{data.task}</div>
							</div>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32" height="32"
								fill="green"
								className="bi bi-pencil justify-content-center align-items-center x-auto y-auto"
								viewBox="0 0 32 32"
								onClick={this.openModal.bind(this, data)}
							>
								<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
							</svg>
							&nbsp;
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32" height="32"
								fill="red"
								viewBox="0 0 16 16"
								onClick={this.deleteTodo.bind(this, data._id)}
							>
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</li>
					))}
				</ul>

				{/* Edit */}
				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} ariaHideApp={false}>
					
					<div className="container">
							<div className="form-group">
								<label className="mb-2"><strong>Update Task</strong></label>
								<input 
									type="text" 
									className="form-control" 
									defaultValue={this.taskObj.task} 
									onChange={(e) => {this.onTaskChange(e)}} ref={(input)=> this.myInput = input}
								/>
							</div>

							<div className="d-grid mt-3 gap-2">
								<input type="button" onClick={this.onUpdate} value="Update" className="btn btn-success"/>
								<button onClick={this.closeModal} className="btn btn-warning">cancel</button>
							</div>
					</div>
				</Modal>
			</>
		)
	}
}