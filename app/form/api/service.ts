import { z } from 'zod';
import { ICreateContactAnswer } from './interfaces';
import { formSchema } from '../model/schema';
import { instance } from '@/app/config/instanse';
import { QUERY_KEYS } from '@/app/config/consts';

export const createContactService = {
	createOne(
		data: Partial<z.infer<typeof formSchema>>
	): Promise<ICreateContactAnswer> {
		return instance.post(`/${QUERY_KEYS.createContact}`, data);
	},
};
