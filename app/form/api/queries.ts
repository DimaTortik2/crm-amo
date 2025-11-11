import { useMutation } from '@tanstack/react-query';
import { createContactService } from './service';
import { toast } from 'react-toastify';
import { IAxiosError, ICreateContactAnswer } from './interfaces';
import { z } from 'zod';
import { formSchema } from '../model/schema';
import { QUERY_KEYS } from '@/app/config/consts';

export function useCreateContact() {
	type ContactVariables = Partial<z.infer<typeof formSchema>>;

	const { mutate: createContact, isPending: isCreateContactPending } =
		useMutation<ICreateContactAnswer, IAxiosError, ContactVariables>({
			mutationFn: newContact => createContactService.createOne(newContact),
			mutationKey: [QUERY_KEYS.createContact],
			onSuccess: data => {
				toast.success(data.data.message);
			},
			onError: err => {
				if (typeof err.response.data.detail === 'string') {
					toast.error(err.response.data.detail);
				} else if (typeof err.response.data.detail[0].msg === 'string') {
					toast.error('Ну и номер ты удумал...');
				} else {
					toast.error('Технические шоколадки');
				}
			},
		});

	return {
		createContact,
		isCreateContactPending,
	};
}
