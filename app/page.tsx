import { ShieldCheck, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-brand-light selection:bg-accent-pink/20">
			{/* Hero Section */}
			<section className="px-6 pt-16 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
				<div>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-white border border-slate-100 shadow-sm text-[10px] font-bold tracking-widest text-slate-500 mb-8 uppercase">
						The Family Operating System
					</div>
					<h1 className="text-6xl md:text-7xl font-bold text-brand-dark font-display leading-[1.1] mb-8">
						Design your life, <br />
						<span className="text-accent-pink">
							not just your day.
						</span>
					</h1>
					<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
						Capturd is a suite of tools for couples. From aligning
						your values to securing your legacy, we help you capture
						what matters most.
					</p>

					{/* CTAs */}
					<div className="flex flex-col gap-4">
						<Link
							className="group flex items-center justify-between w-full max-w-md p-6 bg-brand-dark text-white rounded-journey shadow-active hover:scale-[1.02] transition-all"
							href={"/foundation"}
						>
							<div className="flex items-center gap-4">
								<div className="p-3 bg-white/10 rounded-2xl">
									<Sparkles
										size={24}
										className="text-accent-pink"
									/>
								</div>
								<div className="text-left">
									<p className="font-bold">Foundation</p>
									<p className="text-xs text-white/60 text-wrap">
										Deep alignment marriage preparation.
									</p>
								</div>
							</div>
							<ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
						</Link>

						<button className="hidden group flex items-center justify-between w-full max-w-md p-6 bg-white border border-slate-200 text-brand-dark rounded-journey hover:bg-slate-50 transition-all">
							<div className="flex items-center gap-4">
								<div className="p-3 bg-accent-blue/10 rounded-2xl">
									<ShieldCheck
										size={24}
										className="text-accent-blue"
									/>
								</div>
								<div className="text-left">
									<div className="flex items-center gap-2">
										<p className="font-bold text-wrap">
											File of Life
										</p>
										<span className="text-[9px] bg-accent-blue/10 text-accent-blue px-2 py-0.5 rounded-full uppercase tracking-tighter font-bold">
											Coming Soon
										</span>
									</div>
									<p className="text-xs text-slate-500 text-wrap">
										Your essential legacy & security
										checklist.
									</p>
								</div>
							</div>
							<ChevronRight className="text-slate-300" />
						</button>
					</div>
				</div>

				<div className="relative flex justify-center">
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-accent-pink/5 via-transparent to-transparent pointer-events-none" />

					{/* The "Foundation" Preview Card */}
					<div className="relative glass-card p-10 gradient-pink-soft w-full max-w-sm rotate-[-2deg] shadow-2xl border-white/80 z-10">
						<div className="text-[10px] font-bold tracking-widest text-accent-pink mb-6 uppercase">
							CONFLICT
						</div>
						<h3 className="text-2xl font-bold text-slate-850 mb-12 font-display leading-tight">
							Is it good to do
							<span className="text-accent-pink font-semibold">
								{" "}
								things with friends{" "}
							</span>
							but without your spouse?
						</h3>
						<div className="w-full py-4 bg-brand-dark text-white rounded-pill font-semibold text-center shadow-lg">
							Answer
						</div>
					</div>

					{/* The "File of Life" Preview Card */}
					<div className="absolute -bottom-8 right-0 md:-right-12 glass-card p-8 gradient-blue-soft w-full max-w-[280px] rotate-[4deg] shadow-xl border-white/80 z-20">
						<div className="flex items-center gap-2 mb-4">
							<ShieldCheck
								size={16}
								className="text-accent-blue"
							/>
							<span className="text-[10px] font-bold tracking-widest text-accent-blue uppercase font-display">
								SECURITY CHECKLIST
							</span>
						</div>
						<p className="text-sm font-bold text-slate-850 mb-4 font-display">
							Is your Estate Executor updated?
						</p>
						<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
							<div className="h-full bg-accent-blue w-1/3" />
						</div>
						<p className="text-[10px] text-slate-400 mt-2 font-semibold">
							3 of 9 tasks captured
						</p>
					</div>
				</div>
			</section>

			{/* Traction Testing Section */}
			<section className="bg-white py-20 px-6 border-t border-slate-100">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
					<div>
						<h2 className="text-2xl font-bold text-brand-dark font-display mb-2">
							Expanding the ecosystem
						</h2>
						<p className="text-slate-500">
							We are building tools to protect and grow what you
							build together.
						</p>
					</div>
					<div className="flex flex-wrap gap-4">
						{["Marriage Prep", "File of Life", "Budgeting"].map(
							(item) => (
								<div
									key={item}
									className="px-6 py-3 bg-brand-light rounded-pill border border-slate-100 text-sm font-semibold text-slate-600 hover:border-accent-pink transition-colors cursor-pointer"
								>
									{item}
								</div>
							),
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
