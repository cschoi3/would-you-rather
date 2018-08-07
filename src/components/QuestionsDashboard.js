import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../actions/questions'
import { getUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import Question from './Question';

class QuestionsDashboard extends Component {

	state = {
		selectedTab: 'unanswered'
	}

	componentDidMount () {
		//take below out after developement done
		this.props.dispatch(getUsers())
		this.props.dispatch(getQuestions())
		this.props.dispatch(setAuthedUser('sarahedo'))
	}

	selectTab = (e) => {
		const val = e.target.value
		console.log("HIIIIIIIIIIIIII?????", val)
		this.setState((prevState) => ({
			selectedTab: val
		}))
	}

	render() {
	console.log("questions", this.props.questions)
		return (
			<div className='questions-dashboard-container'>
				<ul className='questions-dashboard-tabs'>
					<button value='unanswered' onClick={this.selectTab}>Unanswered Questions</button>
					<button value='answered' onClick={this.selectTab}>Answered Questions</button>
				</ul>
				<div className='questions-dashboard-body'>
					{this.state.selectedTab === 'answered'
						? this.props.answered.map((q) => (<Question key={q.id} authorId={q.author} id={q.id}/>))
						: this.props.unanswered.map((q) => (<Question key={q.id} authorId={q.author} id={q.id}/>))
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps ({questions, users, authedUser}) {
	console.log('questions from dashboard', Object.values(questions).sort((a,b) => b.timestamp - a.timestamp), users, authedUser)
	return {
		answered: Object.values(questions).filter((q) => users[authedUser.id].answers.hasOwnProperty(q.id)).sort((a,b) => b.timestamp - a.timestamp),
		unanswered: Object.values(questions).filter((q) => !users[authedUser.id].answers.hasOwnProperty(q.id)).sort((a,b) => b.timestamp - a.timestamp)
	}
}

export default connect(mapStateToProps)(QuestionsDashboard)