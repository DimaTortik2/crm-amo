import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { QuerryProvider } from './providers/uerry.provider';
import { ToastProvider } from './providers/toast.provider';
import localFont from 'next/font/local';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Form',
	description: 'Create something',
};

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
				className={`${inter.className} ${myCustomFont.variable} dark overflow-y-hidden bg-[#100a19]`}
			>
				<QuerryProvider>
					<ToastProvider>{children}</ToastProvider>
				</QuerryProvider>
			</body>
		</html>
	);
}
