import React, { useState, useEffect } from 'react';
import NoResults from '../components/NoResults';
import RoboList from './Robots/RoboList';

const Containers = ({ node }) => {
	const [data, setData] = useState(node);
	const [nameFilter, setNameFilter] = useState('');
	const [showClear, setShowClear] = useState(false);
	const [rating, setRating] = useState(0);
	const [date, setDate] = useState('');

	const allSkills = data
		.map(item => item.skills)
		.flat(Infinity)
		.filter((element, index, self) => self.indexOf(element) === index);

	const INITIAL_SKILL_STATE = allSkills.slice(0, 5);

	const [displayedSkills, setDisplayedSkills] = useState(INITIAL_SKILL_STATE);

	const INITIAL_CHECKED_STATE = {};

	const [checkedItems, setCheckedItems] = useState(INITIAL_CHECKED_STATE);

	const handleShowMore = () => {
		setDisplayedSkills(allSkills);
	};

	const handleShowLess = () => {
		setDisplayedSkills(INITIAL_SKILL_STATE);
	};

	useEffect(() => {
		const updatedData = data.filter(item => {
			if (item && item.firstName) {
				return item.firstName.toLowerCase().includes(nameFilter.toLowerCase());
			}
			if (item && item.first_name) {
				return item.first_name.toLowerCase().includes(nameFilter.toLowerCase());
			}
			return false;
		});
		setData(updatedData);
		//eslint-disable-next-line
	}, [nameFilter, node]);

	const handleNameChange = event => {
		setNameFilter(event.target.value);
		setShowClear(true);
	};

	const handleIsChecked = index => event => {
		const newCheckedItems = { ...checkedItems };
		newCheckedItems[index] = event.target.checked;
		const skill = event.target.value;
		setCheckedItems({
			...checkedItems,
			[index]: newCheckedItems,
		});
		if (newCheckedItems[index]) {
			setData(data.filter(item => item.skills.includes(skill)));
		} else {
			setData(data.filter(item => !item.skills.includes(skill)));
		}
		setShowClear(true);
	};

	const handleRating = value => {
		setRating(value);
		setData(data.filter(item => item.rating >= value));
		if (value > rating) {
			setData(data.filter(item => item.rating >= value));
		} else {
			setData(
				data
					.filter(item => item.rating >= rating)
					.concat(data.filter(item => item.rating < value))
			);
		}
		setShowClear(true);
	};

	const handleDate = event => {
		setDate(event.target.value);
		if (date === '') {
			setData(data);
		} else {
			setData(data.filter(item => item.available_from >= date));
		}
		setShowClear(true);
	};

	const clearName = () => {
		setNameFilter('');
		setData(node);
		setShowClear(false);
	};

	const clearChecked = () => {
		setCheckedItems(INITIAL_CHECKED_STATE);
		setData(node);
		setShowClear(false);
	};

	const clearRating = () => {
		setRating(0);
		setData(node);
		setShowClear(false);
	};

	const clearDate = () => {
		setDate('');
		setData(node);
		setShowClear(false);
	};

	const clearAllFilters = () => {
		setNameFilter('');
		setCheckedItems(INITIAL_CHECKED_STATE);
		setRating(0);
		setDate('');
		setData(node);
		setShowClear(false);
	};

	return (
		<>
			<div className='flex mx-10 my-6 justify-between'>
				<div className='flex flex-wrap'>
					{data.length > 0 ? (
						<RoboList data={data} />
					) : (
						<NoResults clearFilters={clearAllFilters} />
					)}
				</div>

				<div className='w-[259px] h-full px-3 border border-solid border-[#F3F3F3] rounded-lg order-3'>
					<div className='flex justify-between'>
						<p className='text-sm text-[rgba(19,19,19,0.4)]'>By name</p>
						{showClear && (
							<button onClick={clearName} className='text-red-600'>
								Clear
							</button>
						)}
					</div>
					<input
						type='text'
						value={nameFilter}
						onChange={handleNameChange}
						placeholder='Name'
						className='border border-solid border-[#F3F3F3] rounded-[99px] px-6 py-2 mt-2'
					/>
					<div className='flex justify-between mt-6'>
						<p className='text-sm text-[rgba(19,19,19,0.4)]'>By skills</p>
						{showClear && (
							<button onClick={clearChecked} className='text-red-600'>
								Clear
							</button>
						)}
					</div>
					{displayedSkills.map((skill, index) => {
						return (
							<div className='flex' key={index}>
								<label key={skill}>
									<input
										type='checkbox'
										checked={checkedItems[index] || false}
										onChange={handleIsChecked(index)}
										className='mr-2'
										value={skill}
										id=''
									/>
									{skill}
								</label>
							</div>
						);
					})}
					{displayedSkills.length < allSkills.length ? (
						<button
							className='text-[#A1A1A1] font-[Lato] text-sm '
							onClick={handleShowMore}
						>
							<span className='mr-2 pb-2'>&#8964;</span>
							Show All
						</button>
					) : (
						<button
							className='text-[#A1A1A1] font-[Lato] text-sm '
							onClick={handleShowLess}
						>
							<span className='mr-2 pb-2'>&#8963;</span>
							Show Less
						</button>
					)}

					<div className='flex justify-between mt-6'>
						<p className='text-sm text-[rgba(19,19,19,0.4)]'>By rating</p>
						{showClear && (
							<button onClick={clearRating} className='text-red-600'>
								Clear
							</button>
						)}
					</div>
					{[1, 2, 3, 4, 5].map(value => (
						<button
							key={value}
							type='button'
							onClick={() => handleRating(value)}
							style={{
								color: value <= rating ? '#69D6BB' : '#131313',
							}}
							className='text-2xl'
						>
							&#9734;
						</button>
					))}

					<div className='flex justify-between mt-6'>
						<p className='text-sm text-[rgba(19,19,19,0.4)]'>By availability</p>
						{showClear && (
							<button onClick={clearDate} className='text-red-600'>
								Clear
							</button>
						)}
					</div>
					<input
						className='border border-solid border-[rgba(19,19,19,0.2)] rounded-[99px] px-6 py-2 my-2 mx-5'
						type='date'
						value={date}
						onChange={handleDate}
					/>
					<div className='flex justify-center my-4'>
						{showClear && (
							<button
								onClick={clearAllFilters}
								className='font-[Lato] font-semibold text-sm text-[#4ABDA0]'
							>
								Clear all filters
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Containers;
