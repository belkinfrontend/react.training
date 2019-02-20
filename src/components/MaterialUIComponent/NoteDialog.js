import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import NoteAdd from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
// import ChipInput from 'material-ui-chip-input';
import FormControl from '@material-ui/core/FormControl';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Select from 'react-select';
import Chips, { Chip } from 'react-chips';

const styles = theme => ({
	fab: {
		margin: theme.spacing.unit * 2,
	},
	appBar: {
		position: 'relative',
	},
	flex: {
		flex: 1,
	},
	absolute: {
		position: 'absolute',
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 3,
	},
});

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class NoteDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chips: [],
			open: false,
		};
	}

	onChange = chips => {
		this.setState({ chips });
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Tooltip title="Add" aria-label="Add">
					<Fab
						color="secondary"
						onClick={this.handleClickOpen}
						className={classes.absolute}
					>
						<NoteAdd />
					</Fab>
				</Tooltip>
				<Dialog
					fullScreen
					open={this.state.open}
					onClose={this.handleClose}
					TransitionComponent={Transition}
				>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="inherit"
								onClick={this.handleClose}
								aria-label="Close"
							>
								<CloseIcon />
							</IconButton>
							<Typography variant="h6" color="inherit" className={classes.flex}>
								Modal
							</Typography>
							<Button color="inherit" onClick={this.handleClose}>
								save note
							</Button>
						</Toolbar>
					</AppBar>
					<FormControl>
						<TextField
							id="outlined-name"
							label="Title"
							// onChange={this.handleChange('name')}
							margin="normal"
							variant="outlined"
						/>
						<Divider />
						<TextField
							id="outlined-multiline-flexible"
							label="Description"
							multiline
							rowsMax="12"
							// onChange={this.handleChange('multiline')}
							margin="normal"
							variant="outlined"
						/>
						<Divider />
						{/* <MuiThemeProvider>
								<ChipInput
									defaultValue={['family', 'important', 'private']}
									fullWidth
									label="tags"
									placeholder="Type and press enter to add tags"
								/>
            </MuiThemeProvider> */}

						<Chips
							uniqueChips
							highlightFirstSuggestion
							value={this.state.chips}
							onChange={this.onChange}
							suggestions={['Family', 'Important', 'Private']}
							renderChip={value => <Chip>{value}</Chip>}
						/>
					</FormControl>
				</Dialog>
			</div>
		);
	}
}

NoteDialog.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoteDialog);
