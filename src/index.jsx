import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import node from './data/data-v2.json';

import Header from './components/Header';
import Footer from './components/Footer';
import Containers from './containers';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				{/* Header component */}
				<Header />
				{/* All containers */}
				<Containers node={node} />
				{/* Footer component */}
				<Footer />
			</div>
		</BrowserRouter>
	);
};

createRoot(document.getElementById('root')).render(<App />);
