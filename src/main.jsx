import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './screens/Root.jsx';
import { BarCharts } from './screens/BarCharts';
import { NotFound } from './screens/NotFound.jsx';
import { Home } from './screens/Home.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/home',
				element: <Home />
			},
			{
				path: '/bar-charts',
				element: <BarCharts />
			}
		]
	}
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
