import ReactECharts from 'echarts-for-react';

export default function BasicBarChart() {
	const option = {
		xAxis: {
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {},
		series: [
			{
				type: 'bar',
				data: [23, 24, 18, 25, 27, 28, 25]
			}
		]
	};

	return (
		<div>
			<h3>Basic Bar Chart</h3>
			<ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
		</div>
	);
}
