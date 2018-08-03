import { SET_AUTHED_USER, RM_AUTHED_USER } from '../actions/authedUser'

export default function authedUser (state={}, action) {
	switch (action.type) {
		case SET_AUTHED_USER :
			return { id: action.id, loggedIn: true }
		case RM_AUTHED_USER :
			return { id: null, loggedIn: false }
		default :
			return state
	}
}