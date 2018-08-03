export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RM_AUTHED_USER = 'RM_AUTHED_USER'

export function setAuthedUser (id) {
	return {
		type: SET_AUTHED_USER,
		id,
		loggedIn: true,
	}
}

export function removeAuthedUser () {
	return {
		type: RM_AUTHED_USER,
		loggedIn: false,
	}
}
