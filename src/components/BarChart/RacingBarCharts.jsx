import ReactECharts from 'echarts-for-react';
import './AllBarCharts.scss';

export default function RacingBarCharts() {
	var data = [];
	for (let i = 0; i < 5; ++i) {
		data.push(Math.round(Math.random() * 200));
	}

	const option = {
		xAxis: {
			max: 'dataMax'
		},
		yAxis: {
			type: 'category',
			data: ['A', 'B', 'C', 'D', 'E'],
			inverse: true,
			animationDuration: 300,
			animationDurationUpdate: 300,
			max: 2 // only the largest 3 bars will be displayed
		},
		series: [
			{
				realtimeSort: true,
				name: 'X',
				type: 'bar',
				data: data,
				label: {
					show: true,
					position: 'right',
					valueAnimation: true
				}
			}
		],
		legend: {
			show: true
		},
		animationDuration: 0,
		animationDurationUpdate: 3000,
		animationEasing: 'linear',
		animationEasingUpdate: 'linear'
	};

	return (
		<div>
			<h3>Stacked Bar Chart</h3>
			<ReactECharts option={option} style={{ width: '100%' }} />
		</div>
	);
}
