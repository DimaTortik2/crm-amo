import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Так мало?' })
		.max(40, { message: 'Разогнался' }),
	phone_number: z
		.string()
		.min(1, { message: 'Ну введи уже раз начал' })
		.refine(isValidPhoneNumber, { message: 'Не верю' })
		.or(z.literal(''))
		.optional(),
	email: z
		.string()
		.min(1, { message: 'Почту, пожалуйста' })
		.max(30, { message: 'Разогнался' })
		.email('Не похоже на мыло'),
	company: z
		.string()
		.min(2, {
			message: 'Чего так мало букав?',
		})
		.max(40, { message: 'Перестарался...' }),
	position: z
		.string()
		.min(2, {
			message: 'Чего так мало букав?',
		})
		.max(50, { message: 'Перестарался...' })
		.or(z.literal(''))
		.optional(),
});
