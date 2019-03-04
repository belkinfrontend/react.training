import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Notice = ({
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
			<CardActionArea>
				<Icon style={{ fontSize: 100 }} color="action">
					note
				</Icon>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography component="p">{description}</Typography>
				</CardContent>
			</CardActionArea>
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

export class NoticesComponent extends Component {
	render() {
		const { notices, deleteNotice, editNotice, isLoading } = this.props;

		if (isLoading) {
			return (
				<div className="cssload-container">
					<div className="cssload-whirlpool" />
				</div>
			);
		}

		if (notices.length < 1) {
			return <p>NO NOTICES!</p>;
		}

		return (
			<div>
				<div className="noticesList">
					{notices.map(notice => (
						<Notice
							data={notice}
							key={notice.id}
							deleteNotice={deleteNotice}
							editNotice={editNotice}
						/>
					))}
				</div>
			</div>
		);
	}
}

NoticesComponent.propTypes = {
	notices: PropTypes.array.isRequired,
	notice: PropTypes.object,
	isLoading: PropTypes.bool.isRequired,
};

export default NoticesComponent;
