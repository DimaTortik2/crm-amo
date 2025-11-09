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
import { isValidPhoneNumber } from 'libphonenumber-js';
import Bg from '@/components/ui/bg/bg';

const formSchema = z.object({
	name: z
		.string()
		.refine(val => val.length === 0 || val.length > 2, {
			message: 'Так мало?',
		})
		.refine(val => val.length <= 30, {
			message: 'Разогнался',
		})
		.optional(),
	phone_number: z
		.string()
		.min(1, { message: 'Нада' })
		.refine(isValidPhoneNumber, { message: 'Не верю' }),
	email: z
		.string()
		.max(30, { message: 'Разогнался' })
		.email('Не похоже на мыло')
		.or(z.literal(''))
		.optional(),
	company: z
		.string()
		.min(2, {
			message: 'Чего так мало букав?',
		})
		.max(40, { message: 'Перестарался...' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			company: '',
			email: '',
			phone_number: '+375',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const filteredValues: Partial<typeof values> = {};

		const keys = Object.keys(values) as Array<keyof typeof values>;

		for (const key of keys) {
			const value = values[key];
			if (value !== '') {
				filteredValues[key] = value;
			}
		}

		console.log(filteredValues);
	}

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
			placeHolder: '+375 ',
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

	return (
		<div className='flex min-h-screen items-center justify-center bg-[#000000] relative'>
			<Bg
				className='absolute bottom-0 left-0'
				colors={['#4B0082', '#8A63D2', '#FFD700']}
				speeds={[75, 150, 300]}
			/>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-8 bg-[#0a0a0ac9] p-10 backdrop-blur-lg rounded-3xl w-[95%] max-w-[400px] absolute z-1 border-2 border-[#e8e8e820]'
				>
					<h1 className='text-xl'>Создание user'a в CRM</h1>

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

					<Button className='w-full' type='submit'>
						ОК
					</Button>
				</form>
			</Form>
		</div>
	);
}
