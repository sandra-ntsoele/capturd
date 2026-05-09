import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Capturd | The Family Operating System",
	description:
		"A suite of intentional tools for couples. Align your values with Foundation and secure your legacy with the File of Life.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-brand-light text-slate-850">
				{children}
			</body>
		</html>
	);
}
