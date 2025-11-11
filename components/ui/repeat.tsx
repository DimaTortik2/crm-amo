import { ButtonHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import ReplayIcon from '@mui/icons-material/Replay';

export function RepeatButton({
	hoveredBg = '#FFD70050',
	bg = 'transparent',
	color = '#FFD700',
	hoverColor = '#8A63D2',
	className,
	disabled,
	onClick,
}: {
	hoveredBg?: string;
	bg?: string;
	hoverColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
	const [hover, setHover] = useState(false);
	return (
		<button
			className={clsx(
				' p-3 flex justify-center items-center rounded-full  ',
				className
			)}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={e => {
				setHover(false);
				if (onClick) onClick(e);
			}}
			style={{
				backgroundColor: hover ? hoveredBg : bg,
				transition: 'background-color 600ms ease, opacity 600ms ease',
				opacity: disabled ? 0 : '40%',
			}}
			disabled={disabled}
		>
			<ReplayIcon
				sx={{
					color: hover ? hoverColor : color,
					transition: 'color 0.5s ease-out',
				}}
			/>
		</button>
	);
}
