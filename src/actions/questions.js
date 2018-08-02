import { _getQuestions } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function getQuestions () {
	return (dispatch) => {
		return _getQuestions()
			.then((questions) => {
				dispatch(receiveQuestions(questions))
			})
	}
}

function receiveQuestions (questions) {
	console.log(`this is receive question ${questions}`)
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}