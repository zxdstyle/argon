import React from 'react';
import ReactDom from 'react-dom/client';

import router from '@/router';
import { RouterProvider } from 'react-router-dom';

import theme from '@/themes/default';
import { ChakraProvider } from '@chakra-ui/react';

import '@/assets/styles/global.css';

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
