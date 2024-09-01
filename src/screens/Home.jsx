import MultiChart from '../components/BarChart/MultiChart';
import { Progress } from '../components/Progress/Progress';
import { RoseTypePieChart } from '../components/Pie/RoseTypePieChart';
import './Home.scss';
import { useState } from 'react';

export const Home = () => {
	const [values, setValues] = useState({
		value1: 87,
		value2: 64,
		value3: 21
	});
	const chartData = {
		radius: 100,
		width: 500,
		height: 300,
		value1: values.value1,
		value2: values.value2,
		value3: values.value3,
		color1: 'blue',
		color2: 'green',
		color3: 'red'
	};

	const handleInputChange = (e, key) => {
		const value = e.target.value == '' ? 0 : e.target.value;
		setValues(prev => {
			return {
				...prev,
				[key]: parseInt(value)
			};
		});
	};

	return (
		<div className="home-container">
			<h1>My ECharts Chart</h1>
			<div>
				<div>
					<label htmlFor="value1">Performance Risk : </label>
					<input type="number" id="value1" onChange={e => handleInputChange(e, 'value1')} />
				</div>
				<div>
					<label htmlFor="value2">Supplier Risk : </label>
					<input type="number" id="value2" onChange={e => handleInputChange(e, 'value2')} />
				</div>
				<div>
					<label htmlFor="value3">Compliance Risk : </label>
					<input type="number" id="value3" onChange={e => handleInputChange(e, 'value2')} />
				</div>
			</div>
			<RoseTypePieChart chartData={chartData} />
			<Progress chartData={chartData} />
			<MultiChart />
		</div>
	);
};
