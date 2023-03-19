import "../styles/loading.scss";

const Loading = () => {
	return (
		<div className='loading-wrapper'>
			<svg height='200' width='200'>
				<circle
					className='loading'
					cx='50'
					cy='50'
					r='25'
					stroke='#fff'
					stroke-width='5'
					fill='transparent'
				/>
			</svg>
		</div>
	);
};

export default Loading;
