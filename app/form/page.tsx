'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Bg from '@/components/ui/bg/bg';
import { useCreateContact } from './api/queries';
import { FormValues } from './model/interface';
import { formSchema } from './model/schema';
import { BarLoader } from 'react-spinners';
import { BackArrowLink } from '@/components/ui/back-arrow';
import { ROUTES } from '../config/routes';

const fileldsData: {
	description?: string;
	label: string;
	placeHolder?: string;
	value: keyof FormValues;
}[] = [
	{
		label: 'ФИО',
		value: 'name',
		placeHolder: 'Стасик',
	},
	{
		label: 'Название компании',
		value: 'company',
		placeHolder: 'Компания',
	},

	{
		label: 'Почта',
		value: 'email',
		placeHolder: 'Почта',
	},

	{
		label: 'Телефон',
		value: 'phone_number',
		placeHolder: '+375',
		description: 'Необязательно',
	},
	{
		label: 'Должность',
		value: 'position',
		placeHolder: 'Самый главный',
		description: 'Необязательно',
	},
];

export default function FormPage() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			company: '',
			email: '',
			phone_number: '',
			position : '',
		},
	});

	const { createContact, isCreateContactPending } = useCreateContact();

	function onSubmit(values: z.infer<typeof formSchema>) {
		const filteredValues: Partial<typeof values> = {};

		const keys = Object.keys(values) as Array<keyof typeof values>;

		for (const key of keys) {
			const value = values[key];
			if (value !== '') {
				filteredValues[key] = value;
			}
		}

		createContact(filteredValues);
	}

	return (
		<div className='flex min-h-screen pt-1 items-start sm:items-center justify-center bg-[#000000] relative font-custom overflow-auto'>
			<Bg
				className='absolute bottom-0 left-0'
				colors={['#4B0082', '#8A63D2', '#FFD700']}
				speeds={[75, 150, 300]}
			/>

			<Form {...form}>
				<div className=' w-[95%] max-w-[400px] absolute z-1 flex flex-col items-start'>
					<BackArrowLink to={ROUTES.home} className=' opacity-40' />
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='backdrop-blur-lg rounded-3xl  pb-7 sm:pb-10 pt-5 sm:pt-8 border-2 border-[#e8e8e820] bg-[#0a0a0ac9] w-full space-y-6 sm:space-y-8'
					>
						<h1 className='text-xl mx-8 sm:mx-10'>Добавление контакта :]</h1>

						<div className='w-full h-[50vh] space-y-6 sm:space-y-8 px-8 sm:px-10 overflow-y-auto scrolling-container '>
							{fileldsData.map(data => (
								<FormField
									key={data.value}
									control={form.control}
									name={data.value}
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												{data.label}
												{data.description && (
													<FormDescription className='opacity-50'>
														{data.description}
													</FormDescription>
												)}
											</FormLabel>
											<FormControl>
												<Input
													placeholder={data.placeHolder || ''}
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							))}
						</div>

						<div className='w-full px-8 sm:px-10'>
							<Button
								className='w-full'
								type='submit'
								disabled={isCreateContactPending}
							>
								{isCreateContactPending ? (
									<>
										<p className='text-[#FFD700] font-custom'>Секунду </p>
										<BarLoader color='#FFD700' width={'90%'} />
									</>
								) : (
									'ОК'
								)}
							</Button>
						</div>
					</form>
				</div>
			</Form>
		</div>
	);
}
