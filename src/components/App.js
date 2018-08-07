import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../actions/users'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import QuestionsDashboard from './QuestionsDashboard'

class App extends Component {

	componentDidMount () {
		console.log('hi')
		this.props.dispatch(getUsers())
	}

	render() {
		console.log("props.loggedIn", this.props.loggedIn)
		return (
			<div className="App">
				<Navigation/>
				<QuestionsDashboard/>
				 {//this.props.loggedIn === true
				// 	? <QuestionsDashboard/>
				// 	: <LoginForm/>
				// 	//remember to swap the above two, have login in the truth section just while developing
				// 
				}
			</div>
		);
	}
}

function mapStateToProps({authedUser}) {
	return {
		loggedIn: authedUser.loggedIn
	}
}

export default connect(mapStateToProps)(App);
