import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-brand-light text-slate-850">
				<div className="bg-brand-light selection:bg-accent-pink/20">
					<nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
						<Link href={"/"}>
							<span className="text-2xl font-bold tracking-tight font-display text-brand-dark">
								capturd
							</span>
						</Link>
						<div className="flex gap-8 items-center hidden">
							<button className="px-5 py-2 bg-brand-dark text-white rounded-pill text-sm font-semibold shadow-active">
								Sign In
							</button>
						</div>
					</nav>
				</div>
				{children}
			</body>
		</html>
	);
}
