
import React from 'react'

import AddTodo from './AddTodo'
import TodoRows from './TodoRows'

/* TodoList */
class TodoList extends React.Component {

  render() {
    return (
      <div id="OSS" className="w1010 m0A mt20 ht500">
        <AddTodo {...this.props} />
        <TodoRows {...this.props} />
      </div>
    )
  }
}
export default TodoList
