import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		this.props.getSearchedNotices(e.target.value);
	}

	render() {
		return (
			<div>
				<h3>SearchComponent</h3>

				<TextField
					id="outlined-name"
					label="Search"
					name="title"
					value={this.state.title}
					onChange={this.onChange}
					margin="normal"
					variant="outlined"
					fullWidth
				/>
			</div>
		);
	}
}

export default SearchComponent;
