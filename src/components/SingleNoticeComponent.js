import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const SingleNotice = ({
	data: { id, title, description },
	deleteNotice,
	editNotice,
}) => {
	const deleteNoticeFn = event => {
		const noticeid = event.currentTarget.dataset.noticeid;

		deleteNotice(parseInt(noticeid));
	};

	const editNoticeFn = event => {
		const noticeid = event.currentTarget.dataset.noticeid;

		editNotice(parseInt(noticeid));
	};

	return (
		<Card className="noticeItem">
			<Icon style={{ fontSize: 100 }} color="action">
				note
			</Icon>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				<Typography component="p">{description}</Typography>
			</CardContent>

			<CardActions>
				<Button
					onClick={editNoticeFn}
					data-noticeid={id}
					size="small"
					color="primary"
				>
					Edit
				</Button>
				<Button
					onClick={deleteNoticeFn}
					data-noticeid={id}
					variant="contained"
					size="small"
					color="secondary"
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};
