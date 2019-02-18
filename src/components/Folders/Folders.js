import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Note from '@material-ui/icons/Note';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
});

class Folders extends React.Component {
	state = {
		open: false,
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	render() {
		const { classes } = this.props;

		return (
			<List
				component="nav"
				subheader={<ListSubheader component="div">Folders</ListSubheader>}
				className={classes.root}
			>
				<ListItem button component={Link} to="/">
					<ListItemIcon>
						<Note />
					</ListItemIcon>
					<ListItemText inset primary="Corporative" />
				</ListItem>

				<ListItem button onClick={this.handleClick}>
					<ListItemIcon>
						<Note />
					</ListItemIcon>
					<ListItemText inset primary="Private" />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested} component={Link} to="/">
							<ListItemIcon>
								<Note />
							</ListItemIcon>
							<ListItemText inset primary="Family" />
						</ListItem>
						<ListItem button className={classes.nested} component={Link} to="/">
							<ListItemIcon>
								<Note />
							</ListItemIcon>
							<ListItemText inset primary="Passwords" />
						</ListItem>
					</List>
				</Collapse>
				<ListItem button component={Link} to="/other_activities">
					<ListItemIcon>
						<Note />
					</ListItemIcon>
					<ListItemText inset primary="Other activities" />
				</ListItem>
			</List>
		);
	}
}

Folders.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Folders);
