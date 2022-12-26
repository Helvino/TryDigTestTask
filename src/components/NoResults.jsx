import React from 'react';

const NoResults = ({ clearFilters }) => {
	return (
		<div className='flex flex-col gap-5 justify-center text-center'>
			<h1 className='font-[Lora] font-bold text-[33px] leading-9 text-[#131313]'>
				No results
			</h1>
			<p className='font-[Lato] text-base text-[#131313]'>
				Your selected filters did not match any of the results
			</p>
			<button
				className='border-2 border-solid border-[#A1A1A1] rounded-[99px] py-2 px-5 font-[Lato] text-base text-[#A1A1A1]'
				onClick={clearFilters}
			>
				Clear all filters
			</button>
		</div>
	);
};

export default NoResults;
