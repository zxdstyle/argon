import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import LineChart from './components/LineChart';

type IndexProps = {
	children?: React.ReactNode;
};

export default function Index({ children }: IndexProps) {
	return (
		<Grid templateColumns="repeat(24, 1fr)" w="full">
			<GridItem colSpan={6}></GridItem>
			<GridItem colSpan={12}>
				<Box h={300}>
					<LineChart />
				</Box>
			</GridItem>
		</Grid>
	);
}
