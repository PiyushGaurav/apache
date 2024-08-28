import BasicBarChart from './components/BarChart/BasicBarChart';
import CustomizedBarChart from './components/BarChart/CustomizedBarChart';
import MultiChart from './components/BarChart/MultiChart';
import MultiSeriesBarChart from './components/BarChart/MultiSeriesBarChart';
import RacingBarCharts from './components/BarChart/RacingBarCharts';
import StackedBarChart from './components/BarChart/StackedBarChart';
import RoseTypePieChart from './components/Pie/RoseTypePieChart';

const App = () => {
	return (
		<div>
			<h1>My ECharts Chart</h1>
			<RoseTypePieChart />
			<MultiChart />
			<BasicBarChart />
			<MultiSeriesBarChart />
			<CustomizedBarChart />
			<StackedBarChart />
			<RacingBarCharts />
		</div>
	);
};

export default App;
