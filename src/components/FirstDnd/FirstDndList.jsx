import React, {useState} from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import styles from './FirstDndList.module.scss';

import prolece from '../../images/Prolece.jpg';
import leto from '../../images/leto.jpeg';
import jesen from '../../images/jesen.jpg';
import zima from '../../images/zima.jpg';
import FirstDndItem from './FirstDndItem';

const godisnjaDobaPodaci = [
	{ name: 'prolece', image: prolece, start: 'mart', wether: 'nice' },
	{ name: 'leto', image: leto, start: 'jun', wether: 'relay hot' },
	{ name: 'jesen', image: jesen, start: 'september', wether: 'not good' },
	{
		name: 'zima',
		image: zima,
		start: 'december',
		wether: 'good on a Mountain',
	},
];

const FirstDndList = () => {
	const [godisnjaDoba, setGodisnjaDoba] = useState(godisnjaDobaPodaci);
	const handleOnDragEnds = result => {
		if(!result.destination) return
		const items = Array.from(godisnjaDoba)
		const [updatedItem] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, updatedItem)
		setGodisnjaDoba(items)
	}
	return (
		<div className={styles.FirstDndList}>
			<h1>Godisnja Doba</h1>
			<DragDropContext onDragEnd={handleOnDragEnds}>
				<Droppable droppableId='god-doba'>
					{(provided) => (
						<ul
							className={styles.FirstDndList__List}
							{...provided.droppableProps} ref={provided.innerRef}
                            
							// style={{
							// 	backgroundColor: snapshot.isDraggingOver
							// 		? 'blue'
							// 		: 'lightgrey',
							// }}
                            >
							{godisnjaDoba.map((doba, index) => (
								<FirstDndItem index={index} {...doba} key={doba.name} />
							))}
                            {provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default FirstDndList;
