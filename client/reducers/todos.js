// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state



// and return updated copy of store



function todos(state = [], action) {

	switch (action.type) {
		case 'ADD_TODO':
			// return the new state with the new todo
			return [...state,{
				id: action.id,
				todos: action.todo,
				comment: action.comment,
				isDone: action.isDone
			}];
		case 'UPDATE_TODO':
			// return the new state with updating of existing todo
			var state = [...state];
			state[action.row].todos = action.todo;
			state[action.row].comment = action.comment;
			return state;
		case 'REMOVE_TODO':
			// return the new state after removing the todo
			return state.filter((arr) => (
				arr.id !== action.id
			));
		case 'TOGGLE_DONE_TODO':
			var state = [...state];
			state[action.row].isDone = action.isDone;
			return state;
		default:
			return state;
	}
	return state;
}

export default todos;
