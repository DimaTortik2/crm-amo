export interface ICreateContactAnswer {
	data: {
		message: string;
	};
}

export interface IAxiosError {
	response: {
		data: { detail: string | { msg: string }[] };
	};
}
