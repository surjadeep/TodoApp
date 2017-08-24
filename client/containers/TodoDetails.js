import React from 'react';
import {Link} from 'react-router'

class TodoDetails extends React.Component {


	handleUpdateTodo(e) {
		e.preventDefault();
		const { todoId } = this.props.params;
		const id = this.props.todos.findIndex((todo) => todo.id == todoId);

		console.log(id)
		const todo = this.refs.todoTxtBox.value.trim();
		const comment = this.refs.todoTxtarea.value.trim();
		const isDone = this.props.utilities.todoUpdateButtonDisabledState;
		this.props.updateTodo(id, todo, comment, isDone);
		// this.props.toggleUpdateTodoBtn(!0);
	}

	handleToggleUpdateTodoBtn(e) {
		const todo = this.refs.todoTxtBox.value.trim();
		const todoUpdateButtonDisabledState = this.props.utilities.todoUpdateButtonDisabledState;
		if (todo !== "" && todo !== null && todo !== undefined) {
			todoUpdateButtonDisabledState && this.props.toggleUpdateTodoBtn(!todoUpdateButtonDisabledState)
		} else {
			this.props.toggleUpdateTodoBtn(!todoUpdateButtonDisabledState)
		}
	}

	componentDidMount() {
		this.handleToggleUpdateTodoBtn();
	}

  
	render() {
		const { todoId } = this.props.params;
		const i = this.props.todos.findIndex((todo) => todo.id == todoId);
		const todo = this.props.todos[i];

		return (

			<div id="OSS" className="w1010 m0A mt20 ht500">
				<div id="OSSearchForm2">
					<h4><span className={todo.isDone ? 'label label-success' : 'label label-warning'}>Status: {todo.isDone ? 'complete' : 'Not complete yet'}</span></h4>
					<div className="mb30"></div>
					<form ref="todoForm" className="form-group" onSubmit={this.handleUpdateTodo.bind(this)}>
						<div>
							<input type="text" ref="todoTxtBox" placeholder="Please enter Todo name here" className="todoTxtDetails" onChange={this.handleToggleUpdateTodoBtn.bind(this)} defaultValue={todo.todos} />
							<div className="mb10"></div>
							<textarea ref="todoTxtarea" id="todoTxtareaID2" placeholder="Please enter Todo comment here" className="todoTADetails" defaultValue={todo.comment}></textarea>
							<div className="mb30"></div>
						</div>
						<div className="OSSFormBtn mb5">
							<button type="submit" className="btn btn-primary btn-sm" disabled={this.props.utilities.todoUpdateButtonDisabledState}>UPDATE TODO</button>
							<Link className="btn btn-default btn-sm ml10" role="button" to="/todos" style={{color:'#000'}}>BACK TO TODO LIST</Link>
						</div>
					</form>
				</div>
			</div>

		)
	}
}
export default TodoDetails
