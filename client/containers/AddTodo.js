import React from 'react'

class AddTodo extends React.Component {

	handleAddTodo(e) {
		e.preventDefault();
		const id = Math.floor(Math.random()*10000000000);
		const todo = this.refs.todoTxtBox.value.trim();
		const comment = this.refs.todoTxtarea.value.trim();
		const isDone = false;
		this.props.addTodo(id, todo, comment, isDone);
		this.props.toggleAddTodoBtn(!0)
		this.refs.todoForm.reset();
	}

	handleToggleAddTodoBtn(e) {
		e.preventDefault();
		const todo = this.refs.todoTxtBox.value.trim();
		const todoAddButtonDisabledState = this.props.utilities.todoAddButtonDisabledState;
		if (todo !== "" && todo !== null && todo !== undefined) {
			todoAddButtonDisabledState && this.props.toggleAddTodoBtn(!todoAddButtonDisabledState)
		} else {
			this.props.toggleAddTodoBtn(!todoAddButtonDisabledState)
		}
	}

	render() {
		return (
			<div id="OSSearchForm1">
				<form ref="todoForm" className="form-group" onSubmit={this.handleAddTodo.bind(this)}>
					<div>
						<input type="text" ref="todoTxtBox" placeholder="Please enter Todo name here" className="form-control" onChange={this.handleToggleAddTodoBtn.bind(this)} />
						<div className="mb10"></div>
						<textarea ref="todoTxtarea" id="todoTxtareaID" placeholder="Please enter Todo comment here" className="form-control"></textarea>
						<div className="mb10"></div>
					</div>
					<div className="OSSFormBtn mb5">
						<button type="submit" className="btn btn-primary btn-sm" disabled={this.props.utilities.todoAddButtonDisabledState}>ADD TODO</button>
					</div>
				</form>
			</div>
		)
	}
}
export default AddTodo
