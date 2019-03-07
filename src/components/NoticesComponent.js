import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { SingleNotice } from './SingleNoticeComponent';

const getItemStyle = (isDragging, draggableStyle) => ({
	// change background colour if dragging
	border: isDragging ? '2px dashed #eee' : 'none',
	borderRadius: '10px',
	padding: '3px',

	// styles we need to apply on draggables
	...draggableStyle,
});

const getListStyle = isDraggingOver => ({
	background: isDraggingOver ? 'lightblue' : 'inherit',
	borderRadius: '10px',
});

export class NoticesComponent extends Component {
	constructor(props) {
		super(props);

		this.onDragEnd = this.onDragEnd.bind(this);
	}

	onDragEnd(result) {
		// dropped outside the list
		if (!result.destination) {
			return;
		}
		this.props.dragNotice(result);
	}

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
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Droppable droppableId="droppable" direction="horizontal">
					{(provided, snapshot) => (
						<div
							className="noticesList"
							ref={provided.innerRef}
							style={getListStyle(snapshot.isDraggingOver)}
							{...provided.droppableProps}
						>
							{notices.map((notice, index) => (
								<Draggable key={notice.id} draggableId={notice.id} index={index}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={getItemStyle(
												snapshot.isDragging,
												provided.draggableProps.style
											)}
										>
											<SingleNotice
												data={notice}
												key={notice.id}
												deleteNotice={deleteNotice}
												editNotice={editNotice}
												index={index}
											/>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		);
	}
}

NoticesComponent.propTypes = {
	notices: PropTypes.array.isRequired,
	notice: PropTypes.object,
	isLoading: PropTypes.bool.isRequired,
};

export default NoticesComponent;
