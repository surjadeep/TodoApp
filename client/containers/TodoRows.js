import React from 'react'
import Todo from './Todo'

class TodoRows extends React.Component {
  
	render() {
		return (
		  <div className="TodoRowCls">{ this.props.todos.length ? this.props.todos.map((todo, i) => <Todo {...this.props} key={i} index={i} todo={todo} />) : "No Todo to display" }</div>
		)
  	}
}
export default TodoRows
