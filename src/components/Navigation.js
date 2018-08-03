import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navigation extends Component {

	render () {
		const { authedUser, loggedIn } = this.props

		return (
			<nav className='nav-main-container'>
				<ul className='nav-links'>
					<li>Home</li>
					<li>New Question</li>
					<li>Leader Board</li>
					{loggedIn && <li>Logout</li>}
				</ul>
			</nav>
		)
	}
}


function mapStateToProps ({authedUser}) {

	return {
		...authedUser,
	}
}

export default connect(mapStateToProps)(Navigation)