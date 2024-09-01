import MultiChart from '../components/BarChart/MultiChart';
import { Progress } from '../components/Progress/Progress';
import { RoseTypePieChart } from '../components/Pie/RoseTypePieChart';
import './Home.scss';

export const Home = () => {
	const chartData = {
		radius: 100,
		width: 500,
		height: 300,
		value1: 87,
		value2: 64,
		value3: 21,
		color1: 'blue',
		color2: 'green',
		color3: 'red'
	};
	return (
		<div className="home-container">
			<h1>My ECharts Chart</h1>
			<RoseTypePieChart chartData={chartData} />

			{/* <Progress chartData={chartData} /> */}
			{/* <MultiChart /> */}
		</div>
	);
};
