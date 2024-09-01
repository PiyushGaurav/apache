import ReactECharts from 'echarts-for-react';
import './AllBarCharts.scss';

export default function MultiChart() {
	const option = {
		title: {
			text: 'Sales Data: Current Year vs. Previous Year Peak',
			left: 'center', // Position title in the center horizontally
			top: '3%' // Move title down from the top
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Current Year', 'Previous Year Peak'],
			top: '7%' // Move legend down or change to 'bottom', 'left', etc.
		},
		yAxis: {
			type: 'category',
			data: ['Back', 'Ankle', 'Elbow', 'Foot', 'Knee', 'Neck', 'Shoulder', 'Hand', 'Ribs', 'Head', 'Others'].reverse()
		},
		xAxis: {
			type: 'value'
		},
		series: [
			{
				name: 'Current Year',
				type: 'bar',
				data: [135, 99, 87, 85, 68, 54, 48, 38, 37, 36, 32].reverse(),
				itemStyle: {
					color: '#73C0DE'
				},
				label: {
					show: true, // Enable label display
					position: 'insideLeft', // Position the label inside the bar
					color: '#fff', // Set the label color (white for better contrast)
					fontWeight: 'bold' // Optional: make the label bold
				}
			},
			{
				name: 'Previous Year Peak',
				type: 'scatter',
				data: [110, 95, 65, 92, 65, 48, 32, 45, 50, 43, 42].reverse(),
				symbolSize: 10,
				itemStyle: {
					color: '#D14A61'
				}
			}
		]
	};

	return (
		<div>
			<h3>Stacked Bar Chart</h3>
			<ReactECharts option={option} style={{ width: '100%', height: '400px' }} />
		</div>
	);
}
