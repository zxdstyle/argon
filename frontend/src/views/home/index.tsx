import React from 'react';
import ReactApexChart, { Props } from 'react-apexcharts';
import { Box } from '@chakra-ui/react';
type IndexProps = {
	children?: React.ReactNode;
};

const options: Props['options'] = {
	chart: {
		type: 'area',
		height: 300,
		foreColor: '#8C87C2',
		fontFamily: 'Rubik, sans-serif',
		stacked: true,
		dropShadow: {
			enabled: true,
			enabledOnSeries: [0],
			top: -2,
			left: 2,
			blur: 5,
			opacity: 0.06,
		},
		toolbar: {
			show: false,
		},
	},
	colors: ['#7B6FFF', '#7395FF'],
	stroke: {
		curve: 'smooth',
		width: 3,
	},
	dataLabels: {
		enabled: false,
	},
	markers: {
		size: 0,
		strokeColor: '#fff',
		strokeWidth: 3,
		strokeOpacity: 1,
		fillOpacity: 1,
		hover: {
			size: 6,
		},
	},
	xaxis: {
		type: 'datetime',
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			offsetX: -10,
			offsetY: 0,
		},
		tooltip: {
			enabled: true,
		},
	},
	grid: {
		show: false,
		padding: {
			left: -5,
			right: 5,
		},
	},
	tooltip: {
		x: {
			format: 'dd MMM yyyy',
		},
	},
	legend: {
		position: 'top',
		horizontalAlign: 'left',
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.5,
			opacityTo: 0,
			stops: [0, 100, 100],
		},
	},
};

const series = [
	{
		name: 'Buy',
		data: [123, 23, 32, 333, 111],
	},
	{
		name: 'Sell',
		data: [222, 3, 33, 22, 12],
	},
];
export default function Index({ children }: IndexProps) {
	return (
		<Box>
			<Box h={300} w={700}>
				<ReactApexChart series={series} options={options} type="area" width="100%" height="100%" />
			</Box>
		</Box>
	);
}
