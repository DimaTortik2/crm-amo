import { ROUTES } from './config/routes';

export const appearsComponentsProps: {
	component: 'gradient' | 'simple' | 'linkButton';
	text: string;
	globalTimeAppearing: number;
	className?: string;
	gradient?: string[];
	duration: number;
	linkTo?: string;
}[] = [
	{
		component: 'simple',
		className: 'mt-10 text-4xl sm:text-6xl w-full max-w-[700px] font-custom',
		text: '2 Димы',
		globalTimeAppearing: 1.7,
		duration: 0.5,
	},

	{
		component: 'simple',
		text: 'Подготовили Вам',
		className: 'text-4xl sm:text-6xl w-full max-w-[700px] font-custom',
		globalTimeAppearing: 3,
		duration: 0.5,
	},
	{
		component: 'gradient',
		text: 'умопомрачительную',
		className: 'text-xl sm:text-2xl w-full max-w-[700px] pl-5  font-custom',
		gradient: ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
		globalTimeAppearing: 4,
		duration: 0.5,
	},
	{
		component: 'gradient',
		text: 'изящную',
		className: 'text-xl sm:text-2xl w-full max-w-[700px]  font-custom',
		gradient: ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
		globalTimeAppearing: 4.5,
		duration: 0.5,
	},
	{
		component: 'gradient',
		text: 'головокружительную',
		className: 'text-xl sm:text-2xl  w-full max-w-[700px] pl-5 font-custom',
		gradient: ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
		globalTimeAppearing: 5,
		duration: 0.5,
	},
	{
		component: 'gradient',
		text: 'чудесную',
		className: 'text-xl sm:text-2xl w-full max-w-[700px] font-custom',
		gradient: ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
		globalTimeAppearing: 5.5,
		duration: 0.5,
	},
	{
		component: 'gradient',
		text: 'замечательную',
		className: 'text-xl sm:text-2xl w-full max-w-[700px] pl-5 font-custom',
		gradient: ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
		globalTimeAppearing: 6,
		duration: 0.5,
	},
	{
		component: 'gradient',
		text: 'прекрасную',
		className: 'text-xl sm:text-2xl w-full max-w-[700px] font-custom',
		gradient: ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
		globalTimeAppearing: 6.5,
		duration: 0.5,
	},

	{
		component: 'simple',
		text: 'Формочку',
		className: 'text-4xl sm:text-6xl w-full max-w-[700px] mt-4 font-custom',
		globalTimeAppearing: 7,
		duration: 0.5,
	},
	{
		component: 'gradient',
		text: 'Специально для Amo Crm.',
		className: 'text-xl sm:text-2xl w-full max-w-[700px] font-custom',
		gradient: ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
		globalTimeAppearing: 7.5,
		duration: 0.5,
	},

	{
		component: 'linkButton',
		className: 'mt-auto px-5 py-6 w-[90%] max-w-[600px] text-2xl font-custom',
		text: 'Заинтересовали?',
		gradient: ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
		globalTimeAppearing: 8.5,
		duration: 0.5,
		linkTo: ROUTES.form,
	},
];

export const ANIMATION_END_GLOBAL_TIME = 8.5;
