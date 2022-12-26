import React, { useState } from 'react';
import Rating from './Rating';
import RoboProfile from './RoboProfile';

const RoboCard = ({ item }) => {
	const [modal, setModal] = useState(false);
	const handleModal = () => setModal(m => !m);

	return (
		<div className='flex justify-around basis-1/3 mb-10'>
			<div className='w-[256px] h-[408px] bg-[#F3F3F3] rounded-lg border border-solid border-[#F3F3F3] hover:cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.11)]'>
				<div className='h-auto'>
					<img
						src={item.images.medium}
						alt={item.images.medium}
						className='hidden md:block'
					/>
					<img
						src={item.images.thumbnail}
						alt={item.images.thumbnail}
						className='block md:hidden'
					/>
				</div>
				<div className='h-1/2 bg-white pt-6'>
					<div className='text-center'>
						<Rating key={item.key} rating={item.rating} />
					</div>
					<h5 className='font-[Lora] font-bold text-2xl text-[#131313] text-center'>
						<span className='mr-2'>
							{item.firstName}
							{item.first_name}
						</span>
						<span>
							{item.lastName}
							{item.last_name}
						</span>
					</h5>
					<div className='flex justify-center mt-6'>
						<button
							onClick={handleModal}
							className='bg-[#69D6BB] hover:bg-[#4ABDA0] rounded-[99px] py-1 px-4 text-sm font-semibold leading-6 text-white'
						>
							Learn More
						</button>
						<RoboProfile modal={modal} handleModal={handleModal} item={item} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoboCard;
