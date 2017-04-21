import React from 'react';


export default class InstrumentAdmin extends React.Component {
	
	constructor(props) {
		super(props);

    	this.state = {
    		instruments:[ ]
    	};
	};

	handleSubmit(event) {
		event.preventDefault();

		console.log('Get List was Submitted');
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit(event).bind(this)}>	
					<input type="submit" value="Search" />
      			</form>
      		</div>
		);
	}
}