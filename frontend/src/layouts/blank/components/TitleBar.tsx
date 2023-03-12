import React from 'react';
import { Box } from '@chakra-ui/react';

type TitleBarProps = {
	children?: React.ReactNode;
};

export default function TitleBar({ children }: TitleBarProps) {
	return (
		// @ts-ignore
		<Box as="header" pos="fixed" top={0} w="full" style={{ '--wails-draggable': 'drag' }}>
			<Box py={4}>{children}</Box>
		</Box>
	);
}
