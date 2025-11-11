import Bg from '@/components/ui/bg/bg';
import Link from 'next/link';
import { ROUTES } from './config/routes';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div className='flex min-h-screen items-center justify-center bg-[#000000] relative'>
			<Bg
				className='absolute bottom-0 left-0'
				colors={['#4B0082', '#8A63D2', '#FFD700']}
				speeds={[75, 150, 300]}
			/>
			<div className='w-full h-full absolute z-1 flex flex-col justify-center items-center text-[#e8e8e8]'>
				<Button asChild>
					<Link href={ROUTES.form}>Helo</Link>
				</Button>
			</div>
		</div>
	);
}
