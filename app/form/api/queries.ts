import { useMutation } from '@tanstack/react-query';
import { createContactService } from './service';
import { toast } from 'react-toastify';
import { ICreateContactAnswer } from './interfaces';
import { z } from 'zod';
import { formSchema } from '../model/schema';
import { QUERY_KEYS } from '@/app/config/consts';

export function useCreateContact() {
	type ContactVariables = Partial<z.infer<typeof formSchema>>;
	type IError = Error;
	const { mutate: createContact, isPending: isCreateContactPending } =
		useMutation<ICreateContactAnswer, IError, ContactVariables>({
			mutationFn: newContact => createContactService.createOne(newContact),
			mutationKey: [QUERY_KEYS.createContact],
			onSuccess: data => {
				toast.success(data.message);
			},
			onError: err => {
				toast.error('Неудача');
				console.log('Неудача ', err);
			},
		});

	return {
		createContact,
		isCreateContactPending,
	};
}
