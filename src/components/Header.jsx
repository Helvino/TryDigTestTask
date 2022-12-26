import React from 'react';
import headerLogo from '../images/Union (1).png';
import Cart from '../images/Vector.png';
import Robot from '../images/Group.png';

const Header = () => {
	return (
		<nav className='w-full flex justify-around bg-[#000F0C]'>
			<div className='flex flex-col'>
				<img src={headerLogo} alt='alt' className='w-[204px] h-[48px] my-5' />
				<h1 className='w-[544px] font-[Lora] font-bold text-5xl text-white my-5'>
					Find your hosehold assistant
				</h1>
			</div>
			<div className='flex flex-col items-center gap-5 my-5'>
				<div className='flex h-fit gap-5 font-[Lato] font-bold text-sm text-white'>
					<a className='hover:text-[#4ABDA0]' href='/robots'>
						Robots
					</a>
					<a className='hover:text-[#4ABDA0]' href='/company'>
						Company
					</a>
					<a className='hover:text-[#4ABDA0]' href='/contacts'>
						Contacts
					</a>
					<button className='flex border-2 border-solid border-white rounded-full font-[Lato] font-bold text-sm text-white px-5 hover:text-[#4ABDA0] hover:border-[#4ABDA0]'>
						<img src={Cart} alt='alt' className='mr-2 mt-[2px]' />
						Cart
					</button>
				</div>
				<img src={Robot} alt='alt' />
			</div>
		</nav>
	);
};

export default Header;
