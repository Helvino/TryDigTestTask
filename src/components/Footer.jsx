import React from 'react';
import footerLogo from '../images/Union (2).png';

const Footer = () => {
	return (
		<div className='w-full flex flex-col items-center bg-[#000F0C]'>
			<img src={footerLogo} alt='alt' className='w-[110px] h-[60px] mt-5' />
			<p className='font-[Lato] uppercase font-bold text-sm text-[rgba(255,255,255,0.4)] py-8'>
				Awesome robots &#169; 2022
			</p>
			<p className='font-[Lato] uppercase font-bold text-sm text-[rgba(255,255,255,0.4)]'>
				H.M.
			</p>
		</div>
	);
};

export default Footer;
