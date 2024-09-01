import ReactECharts from 'echarts-for-react';

export const RoseTypePieChart = ({ chartData }) => {
	const { radius, width, height, value1, value2, value3, color1, color2, color3 } = chartData;
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
				radius: [0, radius],
				center: ['50%', '50%'],
				roseType: 'area', //but when I change value 100 to 87 , rose 1 does not decrease in size instead rose 2 and rose 3 increase a little this is because of roteType set to 'area' , change it to 'radius'
				itemStyle: {
					borderRadius: 0,
					opacity: 0.5
				},
				label: {
					show: false
				},

				data: [
					{
						value: value1,
						name: 'Performance Risk',
						itemStyle: {
							color: color1
							// opacity: 0.5
						}
					},
					{
						value: value2,
						name: 'Supplier Risk',
						itemStyle: {
							color: color2
							// opacity: 0.5
						}
					},
					{
						value: value3,
						name: 'Compliance Risk',
						itemStyle: {
							color: color3
							// opacity: 0.5
						}
					}
				]
			}
		],
		graphic: [
			// {
			// 	type: 'circle',
			// 	left: 'center',
			// 	top: 'center',
			// 	shape: {
			// 		r: 0.25 * radius // Second circle radius
			// 	},
			// 	style: {
			// 		stroke: '#000',
			// 		lineDash: [5, 5], // Dotted line
			// 		fill: 'none'
			// 	}
			// },
			{
				type: 'circle',
				left: 'center',
				top: 'center',
				shape: {
					r: 0.5 * radius // Third circle radius
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
					r: 0.75 * radius // Third circle radius
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
					r: radius // Third circle radius
				},
				style: {
					stroke: '#000',
					lineDash: [5, 5], // Dotted line
					fill: 'none'
				}
			}
		]
	};

	return <ReactECharts option={option} style={{ width, height, backgroundColor: 'white' }} />;
};
