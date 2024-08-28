import ReactECharts from 'echarts-for-react';
import HorizontalProgressBar from '../HorizontalProgressBar';

export default function RoseTypePieChart() {
	const option = {
		legend: {
			top: 'bottom'
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: false, readOnly: false },
				restore: { show: false },
				saveAsImage: { show: false }
			}
		},
		series: [
			{
				name: 'Nightingale Chart',
				type: 'pie',
				radius: [0, 95.35],
				center: ['50%', '50%'],
				roseType: 'area',
				itemStyle: {
					borderRadius: 0,
					opacity: 0.5
				},
				label: {
					show: false
				},

				data: [
					{
						value: 87,
						name: 'Performance Risk',
						itemStyle: {
							color: 'blue'
							// opacity: 0.5
						}
					},
					{
						value: 64,
						name: 'Supplier Risk',
						itemStyle: {
							color: 'green'
							// opacity: 0.5
						}
					},
					{
						value: 21,
						name: 'Compliance Risk',
						itemStyle: {
							color: 'yellow'
							// opacity: 0.5
						}
					}
				]
			}
		],
		graphic: [
			{
				type: 'circle',
				left: 'center',
				top: 'center',
				shape: {
					r: 47.7 // Second circle radius
				},
				style: {
					stroke: '#000',
					lineDash: [5, 5], // Dotted line
					fill: 'none'
				}
			},
			{
				type: 'circle',
				left: 'center',
				top: 'center',
				shape: {
					r: 71.5 // Third circle radius
				},
				style: {
					stroke: '#000',
					lineDash: [5, 5], // Dotted line
					fill: 'none'
				}
			},
			{
				type: 'circle',
				left: 'center',
				top: 'center',
				shape: {
					r: 95.35 // Third circle radius
				},
				style: {
					stroke: '#000',
					lineDash: [5, 5], // Dotted line
					fill: 'none'
				}
			}
		]
	};

	return (
		<div
			style={{
				display: 'flex',
				margin: '50px auto'
			}}
		>
			<div
				style={{
					flex: 1
				}}
			>
				<ReactECharts option={option} style={{ height: '267px', width: '100%' }} />
			</div>
			<div
				style={{
					flex: 1
				}}
			>
				<HorizontalProgressBar title="Performance Risk" progress={0.87} color={'blue'} />
				<HorizontalProgressBar title="Supplier Risk" progress={0.67} color={'green'} />
				<HorizontalProgressBar title="Compliance Risk" progress={0.21} color={'yellow'} />
			</div>
		</div>
	);
}
