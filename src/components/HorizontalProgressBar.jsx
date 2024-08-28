const HorizontalProgressBar = ({ title, progress, color }) => {
	// Ensure progress is between 0 and 1
	const clampedProgress = Math.max(0, Math.min(1, progress)) * 100;

	const containerStyle = {
		height: '30px',
		borderRadius: '5px',
		overflow: 'hidden',
		backgroundColor: 'lightgrey'
	};

	const progressBarStyle = {
		height: '100%',
		width: `${clampedProgress}%`,
		backgroundColor: `${color}`, // Blue progress bar color,
		opacity: 0.5
	};

	return (
		<div
			style={{
				textAlign: 'left',
				margin: '0 10%'
			}}
		>
			<p
				style={{
					fontSize: '20px'
				}}
			>
				{title}
			</p>
			<p
				style={{
					fontSize: '30px',
					fontWeight: 'bold'
				}}
			>
				{progress}
			</p>
			<div style={containerStyle}>
				<div style={progressBarStyle}></div>
			</div>
		</div>
	);
};

export default HorizontalProgressBar;
