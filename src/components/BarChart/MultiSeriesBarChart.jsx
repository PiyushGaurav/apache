import ReactECharts from 'echarts-for-react';
import './AllBarCharts.scss';

export default function MultiSeriesBarChart() {
	const option = {
		xAxis: {
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {},
		series: [
			{
				type: 'bar',
				data: [23, 24, 18, 25, 27, 28, 25]
				// barGap: '20%',
				// barCategoryGap: '40%'
			},
			{
				type: 'bar',
				data: [26, 24, 18, 22, 23, 20, 27]
			}
		]
	};

	return (
		<div>
			<h3>Multi Series Bar Chart</h3>
			<ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
		</div>
	);
}
