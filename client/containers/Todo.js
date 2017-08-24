import React from 'react'
import {Link} from 'react-router'

class Todo extends React.Component {


	handleToggleDoneTodo(e) {
		e.preventDefault()
		this.props.toggleDoneTodo(this.props.index,!this.props.todos[this.props.index].isDone)
	}	

	handleRemoveTodo(e) {
		e.preventDefault()
		this.props.removeTodo(this.props.todo.id)
	}

	handleMouseHover(e) {
		e.preventDefault()
		if (this.refs.TodoItem.lastChild.style.display === "none") {
			this.refs.TodoItem.lastChild.style.display = "block"
		}
	}

	handleMouseOut(e) {
		e.preventDefault()
		if (this.refs.TodoItem.lastChild.style.display === "block") {
			this.refs.TodoItem.lastChild.style.display = "none"
		}
	}



  
	render() {

		
    
		return (
		  
			<div id={this.props.todo.id} className="TodoCls" ref="TodoItem" onMouseOver={this.handleMouseHover.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
				<Link to={`/todos/${this.props.todo.id}`}><span className={this.props.todos[this.props.index].isDone ? 'LT' : ''}>{this.props.todo.todos}</span></Link>
				<div className="TodoBtnCls" style={{display:'none'}}>
					<a title={this.props.todos[this.props.index].isDone ? 'click to mark this todo as undone' : 'click to mark this todo as done'} href="#" className="m0-5" onClick={this.handleToggleDoneTodo.bind(this)}>
					  <span className={this.props.todos[this.props.index].isDone ? 'glyphicon glyphicon-unchecked icon-remove' : 'glyphicon glyphicon-check icon-done'}></span>
					</a>
					<a href="#" className="m0-5" onClick={this.handleRemoveTodo.bind(this)}>
					  <span className="glyphicon glyphicon-remove icon-remove"></span>
					</a>
				</div>
			</div>

		)
  	}
}
export default Todo
