import React from 'react';

import { Image, Box, Text, Button } from '@chakra-ui/react';

import Kubernetes from '@/assets/svg/k8s.svg';
import { FaHome } from 'react-icons/fa';

type AsideProps = {
	children?: React.ReactNode;
};

export default function Aside({ children }: AsideProps) {
	return (
		// @ts-ignore
		<Box px={2} pt={10} w={32} minW={32} display="flex" flexDir="column" alignItems="center" bg="bg" style={{ '--wails-draggable': 'drag' }}>
			<Box display="flex" justifyContent="center" alignItems="center" gap={1} color="whiteAlpha.600">
				<Image src={Kubernetes} />
				<Text fontWeight="600" fontSize="xl">
					Agron
				</Text>
			</Box>
			<Box color="whiteAlpha.600">
				<Button variant="ghost" leftIcon={<FaHome size={22} />}></Button>
			</Box>
		</Box>
	);
}
