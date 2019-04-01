import React, { Component } from 'react';
import PropTypes from 'prop-types';

import history from '../history';
import Switch from 'react-toggle-switch';
import ReactAutocomplete from 'react-autocomplete';

import '../../node_modules/react-toggle-switch/dist/css/switch.min.css';

export class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switched: false,
			value: '',
		};
	}

	onChange = e => {
		// this.setState({ [e.target.name]: e.target.value });
		this.props.getSearchedNotices({
			query: e.target.value,
			isShallowSearch: !this.state.switched,
		});
		this.setState({ value: e.target.value });
	};

	toggleSwitch = () => {
		this.setState(prevState => {
			return {
				switched: !prevState.switched,
			};
		});
	};

	clearSearchQuery = () => {
		console.log('!!!!!!!!!!!!!-- CLEAR SEARCH QUERY');
		// history.push('/directory/1');

		this.props.getSearchedNotices({ query: '' });
	};

	render() {
		console.log(this.props.notices);
		return (
			<div>
				<h3>SearchComponent</h3>

				<Switch
					onClick={this.toggleSwitch}
					on={this.state.switched}
					// enabled={false}
				/>
				<p style={{ textAlign: 'right' }}>Deep search</p>

				{/* <TextField
					id="outlined-name"
					label="Search"
					value={this.state.title}
					onChange={this.onChange}
					margin="normal"
					variant="outlined"
					fullWidth
				/> */}

				<ReactAutocomplete
					items={this.props.notices.map(notice => ({
						id: notice.id,
						directoryId: notice.directoryId,
						label: notice.title,
					}))}
					shouldItemRender={(item, value) =>
						item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
					}
					getItemValue={item => item.label}
					inputProps={{
						style: {
							width: '92%',
							padding: '18.5px 14px',
							border: '1px solid #C0C0C0',
							borderRadius: '6px',
						},
					}}
					wrapperStyle={{ width: '100%' }}
					renderItem={(item, highlighted) => (
						<div
							key={item.id}
							style={{
								backgroundColor: highlighted ? '#eee' : 'transparent',
								textAlign: 'left',
							}}
						>
							<p
								style={{
									width: '96%',
									margin: 0,
									cursor: 'pointer',
									padding: '10px 0 10px 10px',
								}}
								onClick={() => {
									history.push(`/directory/${item.directoryId}`);
									this.clearSearchQuery();
								}}
							>
								{item.label}
							</p>
						</div>
					)}
					value={this.state.value}
					onChange={this.onChange}
					// onSelect={this.clearSearchQuery}
				/>
			</div>
		);
	}
}

SearchComponent.propTypes = {
	getSearchedNotices: PropTypes.func,
};

export default SearchComponent;
