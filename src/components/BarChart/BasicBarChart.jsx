import ReactECharts from 'echarts-for-react';
import './AllBarCharts.scss';
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
			<h1>Basic Bar Chart</h1>
			<ReactECharts option={option} className="chart-style" style={{ width: '100%' }} />;
		</div>
	);
}
