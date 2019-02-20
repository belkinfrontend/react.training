import React from 'react';
import Grid from '@material-ui/core/Grid';
import Search from './MaterialUIComponent/Search';
import NoteDialog from './MaterialUIComponent/NoteDialog';

export default function CommonDirectoryElement(match) {
	console.log(match.match);
	return (
		<Grid container>
			<Grid item xs={12}>
				<Search />
			</Grid>
			<p>{match.match.params.id}</p>
			<NoteDialog />
		</Grid>
	);
}
