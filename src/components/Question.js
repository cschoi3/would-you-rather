import React, { Component } from 'react'

class Question extends Component {

	render () {
		const { authorId, id } = this.props

		return (
			<div>
				<div className='question-header'>
					{authorId} asks:
				</div>
				<div>
					<img />
					<div className='question-options'>
						<h7>Would you rather</h7>
						<p>...eat pizza...</p>
						<button>View Poll</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Question