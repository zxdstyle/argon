import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Blank from '@/layouts/blank';
import Admin from '@/layouts/admin';
import Home from '@/views/home';
export default createBrowserRouter([
	{
		element: <Blank />,
		children: [
			{
				element: <Admin />,
				children: [
					{
						element: <Home />,
						index: true,
					},
				],
			},
		],
	},
]);
