import { Link, Outlet } from 'react-router-dom';
import './Root.scss';
export const Root = () => {
	return (
		<div className="root">
			<div className="sidebar">
				<li>
					<Link to={'/'}>
						<h2>Quality GPT</h2>
					</Link>
				</li>

				<li>
					<Link to={'/home'} className="item">
						<h1>H</h1>
						<p>Home</p>
					</Link>
				</li>
				<li>
					<Link to={'/bar-charts'} className="item">
						<h1>B</h1>
						<p>Bar Charts</p>
					</Link>
				</li>
			</div>

			<div className="main">
				<Outlet />
			</div>
		</div>
	);
};
