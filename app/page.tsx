import { Sparkles, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-light selection:bg-accent-pink/20">
            {/* Hero Section */}
            <section className="px-6 py-8 pb-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-white border border-slate-100 shadow-sm text-[10px] font-bold tracking-widest text-slate-500 mb-8 uppercase">
                        Intentional Marriage Preparation
                    </div>
                    
                    <h1 className="text-6xl md:text-7xl font-bold text-brand-dark font-display leading-[1.1] mb-8">
                        Build a foundation <br />
                        <span className="text-accent-pink">
                            that lasts.
                        </span>
                    </h1>
                    
                    <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
                        Capturd is a shared space for couples to explore the deep, 
                        essential questions before saying &ldquo;I do.&rdquo; Capture your 
                        thoughts, align your visions, and start your journey.
                    </p>

                    <div>
                        <Link
                            className="group inline-flex items-center justify-between min-w-[280px] max-w-md p-6 bg-brand-dark text-white rounded-journey shadow-active hover:scale-[1.02] transition-all"
                            href={"/marriage-prep"}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-2xl">
                                    <Sparkles
                                        size={24}
                                        className="text-accent-pink"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-base">Start Your Journey</p>
                                    <p className="text-xs text-white/60">
                                        Explore 10 foundational categories
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all ml-6" />
                        </Link>
                    </div>
                </div>

                {/* Question Preview Card */}
                <div className="relative flex justify-center py-8 hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-accent-pink/5 via-transparent to-transparent pointer-events-none" />

                    <div className="relative glass-card p-10 gradient-pink-soft w-full max-w-sm shadow-2xl border-white/80 z-10">
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
                        <div className="w-full py-4 bg-brand-dark text-white rounded-pill font-semibold text-center shadow-lg text-sm">
                            Answer
                        </div>
                    </div>
                </div>
                
                {/* Question Preview Card */}
                <div className="relative flex justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-accent-pink/5 via-transparent to-transparent pointer-events-none" />

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

                    <div className="absolute -bottom-8 right-0 md:-right-4 glass-card p-8 gradient-blue-soft w-full max-w-[280px] rotate-[4deg] shadow-xl border-white/80 z-20">
                        <div className="flex items-center gap-2 mb-4">
                            <Heart
                                size={16}
                                className="text-accent-blue"
                            />
                            <span className="text-[10px] font-bold tracking-widest text-accent-blue uppercase font-display">
                                HUSBAND & WIFE
                            </span>
                        </div>
                        <p className="text-sm font-bold text-slate-850 mb-6 font-display leading-relaxed">
                            What are your expectations regarding household responsibilities?
                        </p>
                        <div className="w-full py-2 bg-white/50 text-slate-500 border border-slate-200 rounded-pill font-semibold text-center text-xs shadow-sm">
                            Write your thoughts...
                        </div>
                    </div>
                </div>

            </section>

            <section className="bg-white py-20 px-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-brand-dark font-display mb-2">
                            Where your journey leads
                        </h2>
                        <p className="text-slate-500">
                            Starting with deep alignment, growing into lifelong security.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="px-6 py-3 bg-accent-pink/10 rounded-pill border border-accent-pink/20 text-sm font-semibold text-accent-pink cursor-default">
                            Marriage Prep
                        </div>
                        {["File of Life", "Budgeting"].map((item) => (
                            <div
                                key={item}
                                className="px-6 py-3 bg-brand-light rounded-pill border border-slate-100 text-sm font-semibold text-slate-400 cursor-not-allowed"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}