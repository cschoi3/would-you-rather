import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {

	render () {
		const { authorId, id, users, questions } = this.props,
					authorName = users[authorId].name,
					authorAvatar = users[authorId].avatarURL,
					option1 = questions[id].optionOne.text;

		return (
			<div className='question'>
				<div className='question-header'>
					{authorName} asks:
				</div>
				<div>
					<img src={authorAvatar} alt={authorName} height="42" width="42"/>
					<div className='question-options'>
						<h7>Would you rather</h7>
						<p>{shortenedOption(option1)}</p>
						<button>View Poll</button>
					</div>
				</div>
			</div>
		)
	}
}

function shortenedOption (opt) {
	return `...${opt.slice(0,15)}...`
}

function mapStateToProps({users, questions}) {

	console.log("mapstate in question: ", users, questions)
	return {
		users,
		questions,
	}
}

export default connect(mapStateToProps)(Question)