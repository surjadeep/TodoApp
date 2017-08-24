// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state



// and return updated copy of store



function utilities(state = [], action) {

	switch (action.type) {
		case 'TOGGLE_DISABLE_TODO_ADD_BUTTON':
			return {
			  // take the current state
			  ...state,
			  // toggle todoAddButtonDisabledState with flag coming
			  todoAddButtonDisabledState: action.toggleState
			}
		case 'TOGGLE_DISABLE_TODO_UPDATE_BUTTON':
			return {
			  // take the current state
			  ...state,
			  // toggle todoAddButtonDisabledState with flag coming
			  todoUpdateButtonDisabledState: action.toggleState
			}
		default:
			return state;
	}
	return state;

}

export default utilities;
