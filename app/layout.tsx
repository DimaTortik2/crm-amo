'use client'
import './globals.css';
import { QuerryProvider } from './providers/uerry.provider';
import { ToastProvider } from './providers/toast.provider';
import localFont from 'next/font/local';



const myCustomFont = localFont({
	src: [
		{
			path: './config/fonts/ofont.ru_Nunito.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-my-custom',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${myCustomFont.className} ${myCustomFont.variable} dark overflow-y-hidden bg-[#100a19]`}
			>
				<QuerryProvider>
					<ToastProvider>{children}</ToastProvider>
				</QuerryProvider>
			</body>
		</html>
	);
}
