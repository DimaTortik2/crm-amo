'use client';

import { ReactNode } from 'react';

import { ToastContainer } from 'react-toastify';

export function ToastProvider({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</>
	);
}
