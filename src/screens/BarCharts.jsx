import BasicBarChart from '../components/BarChart/BasicBarChart';
import CustomizedBarChart from '../components/BarChart/CustomizedBarChart';
import MultiSeriesBarChart from '../components/BarChart/MultiSeriesBarChart';
import RacingBarCharts from '../components/BarChart/RacingBarCharts';
import StackedBarChart from '../components/BarChart/StackedBarChart';
import { RoseTypePieChart } from '../components/Pie/RoseTypePieChart';

import './BarCharts.scss';

export const BarCharts = () => {
	return (
		<div className="bar-charts-container">
			<h1>My Bar Chart</h1>
			<RoseTypePieChart />
			<BasicBarChart />
			<MultiSeriesBarChart />
			<CustomizedBarChart />
			<StackedBarChart />
			<RacingBarCharts />
		</div>
	);
};
