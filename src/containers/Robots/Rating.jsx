import React from 'react';

const STAR_COUNT = 5;

// Full Star - &#9733;
// Empty Star - &#9734;

const Rating = ({ key, rating }) => {
	const stars = Array.from({ length: STAR_COUNT }, () => <span>&#9734;</span>);
	let i;
	for (i = 0; i < rating; i++) {
		stars[i] = <span>&#9733;</span>;
	}
	return <div key={key}>{stars}</div>;
};

export default Rating;
