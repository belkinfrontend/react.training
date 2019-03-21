import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import Switch from 'react-toggle-switch';

import '../../node_modules/react-toggle-switch/dist/css/switch.min.css';

export class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switched: false,
		};
	}

	onChange = e => {
		// this.setState({ [e.target.name]: e.target.value });
		this.props.getSearchedNotices({
			query: e.target.value,
			isShallowSearch: !this.state.switched,
		});
	};

	toggleSwitch = () => {
		this.setState(prevState => {
			return {
				switched: !prevState.switched,
			};
		});
	};

	render() {
		return (
			<div>
				<h3>SearchComponent</h3>

				<Switch
					onClick={this.toggleSwitch}
					on={this.state.switched}
					// enabled={false}
				/>
				<p style={{ textAlign: 'right' }}>Deep search</p>

				<TextField
					id="outlined-name"
					label="Search"
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

SearchComponent.propTypes = {
	getSearchedNotices: PropTypes.func,
};

export default SearchComponent;
