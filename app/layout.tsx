import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { QuerryProvider } from './providers/uerry.provider';
import { ToastProvider } from './providers/toast.provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Form',
	description: 'Create something',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${inter.className} dark overflow-y-hidden bg-[#100a19]`}
			>
				<QuerryProvider>
					<ToastProvider>{children}</ToastProvider>
				</QuerryProvider>
			</body>
		</html>
	);
}
