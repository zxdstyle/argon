import React from 'react';
import TitleBar from './components/TitleBar';

import { Outlet } from 'react-router-dom';

export default function Index() {
	return (
		<>
			<TitleBar />

			<Outlet />
		</>
	);
}
