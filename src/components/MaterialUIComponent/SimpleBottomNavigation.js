import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import Edit from '@material-ui/icons/Edit';
import DeleteForever from '@material-ui/icons/DeleteForever';

const styles = {
	root: {
		width: 300,
	},
};

class SimpleBottomNavigation extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<BottomNavigation
				value={value}
				onChange={this.handleChange}
				showLabels
				className={classes.root}
			>
				<BottomNavigationAction label="Add dir" icon={<LibraryAdd />} />
				<BottomNavigationAction label="Edit name" icon={<Edit />} />
				<BottomNavigationAction label="Delete dir" icon={<DeleteForever />} />
			</BottomNavigation>
		);
	}
}

SimpleBottomNavigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
