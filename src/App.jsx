import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/sections/Home';
import Nav from './components/widgets/Nav';

const App = () => {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path='/inicio' element={<Home />} />
			</Routes>
		</div>
	);
}


export default App
