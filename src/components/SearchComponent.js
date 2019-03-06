import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
		};
		this.onChange = this.onChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		this.props.getSearchedNotices(e.target.value);
	}

	render() {
		console.log(this.props.notices);
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

				{this.props.notices.map(notice => (
					<div key={notice.id}>
						<p>{notice.title}</p>
					</div>
				))}
			</div>
		);
	}
}

export default SearchComponent;
