import ReactECharts from 'echarts-for-react';

export default function StackedBarChart() {
	const option = {
		xAxis: {
			data: ['A', 'B', 'C', 'D', 'E']
		},
		yAxis: {},
		series: [
			{
				data: [10, 22, 28, 43, 49],
				type: 'bar',
				stack: 'x'
			},
			{
				data: [5, 4, 3, 5, 10],
				type: 'bar',
				stack: 'x'
			}
		]
	};

	return (
		<div>
			<h3>Stacked Bar Chart</h3>
			<ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
		</div>
	);
}
