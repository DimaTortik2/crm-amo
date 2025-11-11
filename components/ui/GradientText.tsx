'use client';
import { CSSProperties, ReactNode } from 'react';

interface GradientTextProps {
	children: ReactNode;
	className?: string;
	colors?: string[];
	animationSpeed?: number;
	style?: CSSProperties;
}

export function GradientText({
	children,
	className = '',
	colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
	animationSpeed = 8,
	style = {},
}: GradientTextProps) {
	const gradientStyle = {
		backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
		animationDuration: `${animationSpeed}s`,
	};

	return (
		<div
			className={`relative rounded-[1.25rem] font-medium transition-shadow duration-500 overflow-hidden cursor-po  inter ${className}`}
			style={style}
		>
			<p
				className='font-custom inline-block relative z-2 text-transparent bg-cover animate-gradient'
				style={{
					...gradientStyle,
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					backgroundSize: '300% 100%',
				}}
			>
				{children}
			</p>
		</div>
	);
}
