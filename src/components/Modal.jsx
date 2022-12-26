import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from 'react-haiku';

const Modal = ({ item, visible, children, handleModal }) => {
	const ref = useRef(null);

	// Use outside handler
	useClickOutside(ref, handleModal);

	// Do not render if modal is not visible
	if (!visible) return null;

	return createPortal(
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div ref={ref} className='relative w-full my-6 mx-auto max-w-4xl'>
					{/* Content */}
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
						{/* Header */}
						<section className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
							{/* <h1 className='font-[Lora] text-[19px] leading-5 font-bold'>
								More about {item.firstName}
								{item.first_name}
							</h1> */}
							<h1 className='font-[Lora] text-[19px] leading-5 font-bold'>
								More about
								<span className='mx-1'>
									{item.firstName}
									{item.first_name}
								</span>
								<span>
									{item.lastName}
									{item.last_name}
								</span>
							</h1>
							<button onClick={handleModal} className='text-xl text-slate-500'>
								X
							</button>
						</section>
						{/* Body */}
						<section className='relative p-6 flex-auto'>{children}</section>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
		</>,
		document.body
	);
};

export default Modal;
