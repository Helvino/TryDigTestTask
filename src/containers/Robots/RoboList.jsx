import React, { useState } from 'react';
import RoboCard from './RoboCard';

const ITEMS_PER_RENDER = 12;

const RoboList = ({ data }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const orderedList = data.sort((a, b) =>
		a.registered_at > b.registered_at ? -1 : 1
	);

	const items = orderedList.slice(0, currentIndex + ITEMS_PER_RENDER);

	const handleLoadMoreClick = () => {
		setCurrentIndex(currentIndex + ITEMS_PER_RENDER);
	};

	return (
		<>
			{items.map(item => {
				return <RoboCard key={item.key} item={item} />;
			})}
			{currentIndex + ITEMS_PER_RENDER < data.length && (
				<button
					className='w-full border-2 border-solid border-[#A1A1A1] rounded-[99px] py-6 my-5 text-base font-semibold text-[#A1A1A1]'
					onClick={handleLoadMoreClick}
				>
					Load More
				</button>
			)}
		</>
	);
};

export default RoboList;
