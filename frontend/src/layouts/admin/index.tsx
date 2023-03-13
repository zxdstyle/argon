import React from 'react';
import Aside from './components/Aside';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

type IndexProps = {
	children?: React.ReactNode;
};

export default function Index({ children }: IndexProps) {
	return (
		<Box as="main" h="full" w="full" display="flex">
			<Aside />
			<Outlet />
		</Box>
	);
}
