import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import clsx from 'clsx';

export function BackArrowLink({
	to,
	hoveredBg = '#FFD70050',
	bg = 'transparent',
	color = '#FFD700',
	hoverColor = '#8A63D2',
	className,
}: {
	to: string;
	hoveredBg?: string;
	bg?: string;
	color?: string;
	hoverColor?: string;
	className?: string;
}) {
	const [hover, setHover] = useState(false);
	return (
		<Link
			replace
			href={to}
			className={clsx(
				'p-3 flex justify-center items-center rounded-full  ',
				className
			)}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				backgroundColor: hover ? hoveredBg : bg,
				transition: 'background-color 600ms ease',
			}}
		>
			<ArrowBackIosNewIcon
				sx={{
					color: hover ? hoverColor : color,
					transition: 'color 0.5s ease-out',
				}}
			/>
		</Link>
	);
}
