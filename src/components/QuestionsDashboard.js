import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/questions'
import Question from './Question';

class QuestionsDashboard extends Component {

	componentDidMount () {
		this.props.dispatch(getQuestions())
	}

	render() {
	console.log("questions", this.props.questions)
		return (
			<div className='questions-dashboard-container'>
				<ul className='questions-dashboard-tabs'>
					<li>Unanswered Questions</li>
					<li>Answered Questions</li>
				</ul>
				<div className='questions-dashboard-body'>
					{this.props.questions.map((q) => (<Question key={q.id} authorId={q.author} id={q.id}/>))}
				</div>
			</div>
		)
	}
}

function mapStateToProps ({questions}) {
	console.log('questions from dashboard', Object.values(questions).sort((a,b) => b.timestamp - a.timestamp))
	return {
		questions: Object.values(questions).sort((a,b) => b.timestamp - a.timestamp),
	}
}

export default connect(mapStateToProps)(QuestionsDashboard)