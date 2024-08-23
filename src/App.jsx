import BasicBarChart from './components/BarChart/BasicBarChart';
import CustomizedBarChart from './components/BarChart/CustomizedBarChart';
import MultiSeriesBarChart from './components/BarChart/MultiSeriesBarChart';
import StackedBarChart from './components/BarChart/StackedBarChart';

const App = () => {
	return (
		<div>
			<h1>My ECharts Chart</h1>
			<BasicBarChart />
			<MultiSeriesBarChart />
			<CustomizedBarChart />
			<StackedBarChart />
		</div>
	);
};

export default App;
