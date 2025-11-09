import clsx from 'clsx';
import './style/bg.css';

export default function Bg({
	colors,
	speeds,
	className,
}: {
	colors: string[];
	speeds: number[];
	className?: string;
}) {
	const waveStyles = {
		'--color1': colors[0],
		'--color2': colors[1],
		'--color3': colors[2],
		'--speed1': `${speeds[0]}s`,
		'--speed2': `${speeds[1]}s`,
		'--speed3': `${speeds[2]}s`,
	};

	return (
		<div
			className={clsx('w-full h-full min-h-25 z-0 overflow-hidden', className)}
			style={waveStyles as React.CSSProperties}
		>
			<svg
				className='abolute bottom-0 w-full h-full'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox={'0 24 50 30'}
				preserveAspectRatio='none'
				shapeRendering='auto'
			>
				<defs>
					<path
						id='gentle-wave'
						d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
					/>
				</defs>
				<g className='waves-parallax'>
					<use xlinkHref='#gentle-wave' x='48' y='0' className='wave1' />
					<use xlinkHref='#gentle-wave' x='48' y='10' className='wave2' />
					<use xlinkHref='#gentle-wave' x='48' y='20' className='wave3' />
				</g>
			</svg>
		</div>
	);
}
