/* 
	action creators are pure functions 
	actions are return objects with must have "type" property and optional "payload" property

	we can call the actions: 
		$r.store.dispath( { type: 'INCREMENT_LIKES', index: 0 } )
		that will call all the reducer at a time, now it's our job to distinguish them by creating a switch statement.
*/

import * as types from './actionTypes'

// add todo
export function addTodo(id,todo,comment,isDone) {
  return {
    type: 'ADD_TODO',
    id,
	todo,
	comment,
	isDone
  }
}

// update todo
export function updateTodo(row,todo,comment) {
  return {
    type: 'UPDATE_TODO',
    row,
	todo,
	comment
  }
}

// remove todo
export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

// remove todo
export function toggleDoneTodo(row,isDone) {
  return {
    type: 'TOGGLE_DONE_TODO',
    row,
	isDone
  }
}

export function toggleAddTodoBtn(toggleState) {
	return {
		type: 'TOGGLE_DISABLE_TODO_ADD_BUTTON',
		toggleState
	}
}

export function toggleUpdateTodoBtn(toggleState) {
	return {
		type: 'TOGGLE_DISABLE_TODO_UPDATE_BUTTON',
		toggleState
	}
}




