import ReactECharts from 'echarts-for-react';

export default function CustomizedBarChart() {
	const option = {
		xAxis: {
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {},
		series: [
			{
				type: 'bar',
				showBackground: true,
				backgroundStyle: {
					color: 'rgba(220, 220, 220, 0.8)'
				},
				data: [
					23,
					24,
					18,
					25,
					27,
					{
						value: 28,
						itemStyle: {
							color: '#91cc75',
							shadowColor: '#91cc75',
							borderType: 'dashed',
							opacity: 0.5,
							borderColor: 'blue'
						}
					},
					25
				],
				barWidth: '75%',
				itemStyle: {
					barBorderRadius: 5,
					borderWidth: 1,
					borderType: 'solid',
					borderColor: '#73c0de',
					shadowOffsetX: -2,
					shadowOffsetY: -2,
					shadowColor: '#5470c6',
					shadowBlur: 3
				}
			}
		]
	};

	return (
		<div>
			<h3>Customized Basic Bar Chart</h3>
			<ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
		</div>
	);
}
