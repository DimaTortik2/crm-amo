import { z } from 'zod';
import { ICreateContactAnswer } from './interfaces';
import { formSchema } from '../model/schema';

export const createContactService = {
	createOne(
		data: Partial<z.infer<typeof formSchema>>
	): Promise<ICreateContactAnswer> {
		return new Promise((res, rej) => {
			setTimeout(() => {
				console.log('Всё окей, вот ', data);
				res({ message: 'Всё ок!' });
			}, 2000);
		});
	},
};
