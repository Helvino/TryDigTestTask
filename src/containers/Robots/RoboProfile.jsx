import React from 'react';
import Modal from '../../components/Modal';
import Rating from './Rating';

const RoboProfile = ({ modal, handleModal, item }) => {
	return (
		<Modal item={item} visible={modal} handleModal={handleModal}>
			<div className='flex'>
				<div className='w-fit'>
					<Rating key={item.key} rating={item.rating} />
					<h5 className='font-[Lora] font-bold text-[33px] leading-9 text-[#131313]'>
						<span className='mr-2'>
							{item.firstName}
							{item.first_name}
						</span>
						<span>
							{item.lastName}
							{item.last_name}
						</span>
					</h5>
					<p className='font-[Lato] text-sm text-[rgba(19,19,19,0.4)] mt-6'>
						About
					</p>
					<p className='font-[Lato] text-[#131313] mt-1'>{item.description}</p>
					<p className='font-[Lato] text-sm text-[rgba(19,19,19,0.4)] mt-6'>
						Registered at
					</p>
					<p className='font-[Lato] text-[#131313] mt-1'>
						{item.registered_at}
					</p>
					<p className='font-[Lato] text-sm text-[rgba(19,19,19,0.4)] mt-6'>
						Skills
					</p>
					{item.skills.map(skill => {
						return <li>{skill}</li>;
					})}
					<p className='font-[Lato] text-sm text-[rgba(19,19,19,0.4)] mt-6'>
						Contact information
					</p>
					<p>
						<span>&#128222;</span>
						<span className='ml-2'>{item.phone}</span>
					</p>
					<p>
						<span>&#128231;</span>
						<span className='ml-2'>{item.email}</span>
					</p>
				</div>
				<div className='bg-[#F3F3F3] rounded-lg border border-solid border-[#F3F3F3] w-[500px] h-fit ml-16'>
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
			</div>
		</Modal>
	);
};

export default RoboProfile;
