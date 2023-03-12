import React from 'react';

import Kubernetes from '@/assets/svg/k8s.svg';
import { Image, Box, Text } from '@chakra-ui/react';

import { Environment } from '~/wailsjs/runtime';

type AsideProps = {
	children?: React.ReactNode;
};

export default function Aside({ children }: AsideProps) {
	Environment().then(e => console.log(e.arch));

	return (
		// @ts-ignore
		<Box px={2} pt={10} w={32} display="flex" flexDir="column" alignItems="center" bg="bg" style={{ '--wails-draggable': 'drag' }}>
			<Box display="flex" justifyContent="center" alignItems="center" gap={1} color="whiteAlpha.600">
				<Image src={Kubernetes} />
				<Text fontWeight="600" fontSize="xl">
					Agron
				</Text>
			</Box>
		</Box>
	);
}
