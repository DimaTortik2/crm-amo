'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export function TransitionProvider({ children }: { children: ReactNode }) {
	const pageVariants: Variants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.75,
				ease: 'easeInOut',
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.75,
				ease: 'easeInOut',
			},
		},
	};

	const pathname = usePathname();
	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={pathname} // Ключ по pathname говорит AnimatePresence, что компонент сменился
				variants={pageVariants}
				initial='initial'
				animate='animate'
				exit='exit'
				className='min-h-screen'
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
