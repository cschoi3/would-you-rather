import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginForm extends Component {

	state = {
		optionValue: 'default'
	}

	onOptionChange = (e) => {
		const val = e.target.value
		
		this.setState((prevState, props) => ({
			optionValue: val
		}))
	}

	onFormSubmit = (e) => {
		e.preventDefault();

		if(this.state.optionValue === 'default') {
			alert('Error logging in, please try again')
		} else {
			const { dispatch } = this.props
			dispatch(setAuthedUser(this.state.optionValue))

			this.setState((prevState, props) => ({
				optionValue: 'default'
			}))
		}
	}

	render () {
		// console.log('loginform:', this.props)
		const { optionValue } = this.state
		return (
			<div className='login-main-container'>
				<div className='login-header'>
					<h3>
						Welcome to the Would You Rather App!
					</h3>
					<h5>
						Please sign in to continue
					</h5>
				</div>
				<div className='login-body'>
					<form onSubmit={this.onFormSubmit}>
						<select name="username-select" id="username-select" onChange={this.onOptionChange} value={optionValue}>
							<option disabled value='default'> -- select a user -- </option>
							{
								this.props.users.map((user) => {
									return (
										<option key={user.id} value={user.id}>
											{user.name}
										</option>
									)
								})
							}
						</select>
						<button type='submit'>
							Sign in
						</button>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps ({users}) {
	return {
		users: Object.values(users),
	}
}

export default connect(mapStateToProps)(LoginForm)
