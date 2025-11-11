'use client';

import Bg from '@/components/ui/bg/bg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SplitText } from '@/components/ui/SplitText';
import { GradientText } from '@/components/ui/GradientText';
import { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { presentationSeenAtom } from './store/atoms';
import { RewindButton } from '@/components/ui/rewind';
import { RepeatButton } from '@/components/ui/repeat';
import {
	ANIMATION_END_GLOBAL_TIME,
	appearsComponentsProps,
} from './main-page.consts';

export default function Home() {
	const [visibleItems, setVisibleItems] = useState<number[]>([]);
	const [presentationSeen, setPresentationSeen] = useAtom(presentationSeenAtom);

	useEffect(() => {
		if (presentationSeen) return;

		//индикатор завершения анимации
		const animationEndTimout = setTimeout(
			() => setPresentationSeen(true),
			ANIMATION_END_GLOBAL_TIME * 1000
		);

		const timeouts = appearsComponentsProps.map((el, i) => {
			//запускаем таймер на высвечивание компонента
			return setTimeout(() => {
				setVisibleItems(prev => [...prev, i]);
			}, el.globalTimeAppearing * 1000);
		});

		return () => {
			console.log('clearing');
			clearTimeout(animationEndTimout);
			timeouts.forEach(timout => clearTimeout(timout));
		};
	}, [presentationSeen, setPresentationSeen]);

	const appearComponents: ReactNode[] = appearsComponentsProps.map(
		(elProps, i) => {
			switch (elProps.component) {
				case 'simple':
					return (
						<p
							style={{
								transition: clsx('opacity', `${elProps.duration}s`, 'ease'),
								opacity: presentationSeen
									? 100
									: visibleItems.includes(i)
									? 100
									: 0,
							}}
							className={elProps.className}
						>
							{elProps.text}
						</p>
					);

				case 'gradient':
					return (
						<GradientText
							colors={
								elProps.gradient || [
									'#40ffaa',
									'#4079ff',
									'#40ffaa',
									'#4079ff',
									'#40ffaa',
								]
							}
							animationSpeed={5}
							className={elProps.className}
							style={{
								transition: clsx('opacity', `${elProps.duration}s`, 'ease'),
								opacity: presentationSeen
									? 100
									: visibleItems.includes(i)
									? 100
									: 0,
							}}
						>
							{elProps.text}
						</GradientText>
					);
				case 'linkButton':
					return (
						<Button
							style={{
								transition: clsx(
									'opacity',
									`${elProps.duration}s`,
									'ease',
									', transform',
									'0.5s',
									'ease',
									', background',
									'0.5s',
									'ease'
								),
								opacity: presentationSeen
									? 100
									: visibleItems.includes(i)
									? 100
									: 0,

								pointerEvents: presentationSeen ? 'all' : 'none',
							}}
							className={elProps.className}
							onClick={() => setPresentationSeen(true)}
							asChild
						>
							<Link href={elProps.linkTo || ''}>{elProps.text}</Link>
						</Button>
					);
			}
		}
	);

	return (
		<div className='flex min-h-screen items-center justify-center bg-[#000000] relative'>
			<Bg
				className='absolute bottom-0 left-0'
				colors={['#4B0082', '#8A63D2', '#FFD700']}
				speeds={[75, 150, 300]}
			/>

			{presentationSeen ? (
				<RepeatButton
					className='absolute top-2 right-2 z-10'
					onClick={() => {
						setPresentationSeen(false);
						setVisibleItems([]);
					}}
				/>
			) : (
				<RewindButton
					className='absolute top-2 right-2 z-10'
					onClick={() => {
						setPresentationSeen(true);
					}}
				/>
			)}

			<div className='w-full h-full absolute z-1 flex flex-col p-5 items-center text-[#e8e8e8]'>
				<SplitText
					text='Для урока РиСБД'
					className='text-5xl sm:text-[4rem] font-semibold text-center mt-5 font-custom'
					delay={100}
					duration={0.6}
					ease='power3.out'
					splitType='chars'
					from={presentationSeen ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
					rootMargin='-100px'
					textAlign='center'
				/>
				{...appearComponents}
			</div>
		</div>
	);
}
