import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import styles from './FirstDndItem.module.scss';

const FirstDndItem = ({ name, image, wether, start, index }) => {
	return (
		<Draggable draggableId={name} index={index}>
            {(provided) => (
			<li
				className={styles.FirstDndItem}
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}>
				<div>
					<img src={image} alt={name} />
				</div>
				<div>
					<h3>
						{index} - {name}
					</h3>
					<p>starts: {start}</p>
					<p>wether: {wether}</p>
				</div>
			</li>
            )}
		</Draggable>
	);
};

export default FirstDndItem;
