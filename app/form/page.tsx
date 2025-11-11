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
		label: 'Название компании',
		value: 'company',
		placeHolder: 'Компания',
	},

	{
		label: 'Телефон',
		value: 'phone_number',
		placeHolder: '+375',
	},
	{
		label: 'ФИО',
		value: 'name',
		placeHolder: 'Стасик',
		description: 'Необязательно',
	},
	{
		label: 'Почта',
		value: 'email',
		placeHolder: 'Почта',
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
		<div className='flex min-h-screen items-center justify-center bg-[#000000] relative font-custom pb-[1rem]'>
			<Bg
				className='absolute bottom-0 left-0'
				colors={['#4B0082', '#8A63D2', '#FFD700']}
				speeds={[75, 150, 300]}
			/>

			<BackArrowLink
				to={ROUTES.home}
				className='absolute top-4 left-4 opacity-40'
			/>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-8 bg-[#0a0a0ac9] p-10 backdrop-blur-lg rounded-3xl w-[95%] max-w-[400px] absolute z-1 border-2 border-[#e8e8e820]'
				>
					<h1 className='text-xl'>Добавление контакта :]</h1>

					{fileldsData.map(data => (
						<FormField
							key={data.value}
							control={form.control}
							name={data.value}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{data.label}</FormLabel>
									<FormControl>
										<Input placeholder={data.placeHolder || ''} {...field} />
									</FormControl>
									{data.description && (
										<FormDescription>{data.description}</FormDescription>
									)}
									<FormMessage />
								</FormItem>
							)}
						/>
					))}

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
				</form>
			</Form>
		</div>
	);
}
