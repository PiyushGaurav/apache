import ReactECharts from 'echarts-for-react';

export default function RoseTypePieChart() {
	const option = {
		legend: {
			top: 'bottom'
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		series: [
			{
				name: 'Nightingale Chart',
				type: 'pie',
				radius: [50, 250],
				center: ['50%', '50%'],
				roseType: 'area',
				itemStyle: {
					borderRadius: 8
				},
				data: [
					{ value: 80, name: 'rose 1' },
					{ value: 25, name: 'rose 2' },
					{ value: 56, name: 'rose 3' }
				]
			}
		]
	};

	return (
		<div>
			<h3>Basic Bar Chart</h3>
			<ReactECharts option={option} style={{ height: '600px', width: '600px' }} />
		</div>
	);
}
