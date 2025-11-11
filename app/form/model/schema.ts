import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const formSchema = z.object({
	name: z
		.string()
		.refine(val => val.length === 0 || val.length > 2, {
			message: 'Так мало?',
		})
		.refine(val => val.length <= 50, {
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
