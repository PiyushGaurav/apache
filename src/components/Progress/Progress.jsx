import { HorizontalProgressBar } from './HorizontalProgressBar';
export const Progress = ({ chartData }) => {
	const { value1, value2, value3 } = chartData;
	console.log(value1, value2, value3);
	return (
		<div
			style={{
				margin: '20px',
				height: '300px'
			}}
		>
			<HorizontalProgressBar title="Performance Risk" progress={value1} color={'blue'} />
			<HorizontalProgressBar title="Supplier Risk" progress={value2} color={'green'} />
			<HorizontalProgressBar title="Compliance Risk" progress={value3} color={'yellow'} />
		</div>
	);
};
