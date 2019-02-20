import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Note from '@material-ui/icons/Note';
import SimpleBottomNavigation from '../MaterialUIComponent/SimpleBottomNavigation';
// import TestComponent from '../TestComponent';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 300,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
});

class Directories extends React.Component {
	directories = [
		{
			id: 1,
			name: 'root',
		},
		{
			id: 2,
			parentId: 1,
			name: 'jevoGGG',
		},
	];

	state = {
		open: false,
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};
	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

	render() {
		const { classes } = this.props;
		const { directories } = this;

		return (
			<List
				component="nav"
				subheader={<ListSubheader component="div">Directories</ListSubheader>}
				className={classes.root}
			>
				{directories.map(({ id, name }) => (
					<ListItem key={id} button component={Link} to={`/directory/${id}`}>
						<ListItemIcon>
							<Note />
						</ListItemIcon>
						<ListItemText inset primary={name} />
					</ListItem>
				))}
				<ListItem button component={Link} to={`/directory/test`}>
					<ListItemIcon>
						<Note />
					</ListItemIcon>
					<ListItemText inset primary={'Test'} />
				</ListItem>

				<form noValidate autoComplete="off">
					<TextField
						id="standard-name"
						label="Add directory"
						className={classes.textField}
						value={this.state.name}
						onChange={this.handleChange('name')}
						margin="normal"
					/>
				</form>
				<SimpleBottomNavigation />
			</List>
		);
	}
}

Directories.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Directories);
