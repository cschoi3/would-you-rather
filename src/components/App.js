import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getQuestions } from '../actions/questions'
import { getUsers } from '../actions/users'
import LoginForm from './LoginForm'
import QuestionsDashboard from './QuestionsDashboard'

class App extends Component {

	componentDidMount () {
		console.log('hi')
		this.props.dispatch(getQuestions())
		this.props.dispatch(getUsers())
	}

	render() {
		console.log("props.loggedIn", this.props.loggedIn)
		return (
			<div className="App">
				{this.props.loggedIn === true
					? <QuestionsDashboard/>
					: <LoginForm/>
				}
			</div>
		);
	}
}

function mapStateToProps({authedUser}) {
	return {
		loggedIn: authedUser !== null
	}
}

export default connect(mapStateToProps)(App);
