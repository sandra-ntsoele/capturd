import { categories } from "@/src/features/foundation/constants/categories";
import { Icon, Sparkle } from "lucide-react";
import Link from "next/link";


export default function FoundationDashboard() {
    return (
        <div className="min-h-screen bg-brand-light selection:bg-accent-pink/20">

            <section
                className="px-6 pt-16 pb-24 max-w-7xl mx-auto grid 
                    grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {categories.map((cat, index) => {
                    const isFeatured = index % 3 === 0;

                    return (
                        <Link
                            key={cat.name}
                            className={`col-span-${index} grid-flow-dense relative 
                                glass-card p-10 w-full 
                                shadow-2xl border-white/80 z-10
                                transform-gpu hover:scale-115
                                flex flex-col justify-between
                                ${isFeatured ?
                                "lg:col-span-2 lg:row-span-2 min-h-[400px] gradient-blue-soft" :
                                "col-span-1 min-h-[200px] gradient-pink-soft"}`
                            }
                            href={"/foundation"}
                        >
                            <div>
                                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                                    <cat.icon />
                                </span>
                                <h3
                                    className={`font-display font-bold mt-2 
                                        text-3xl`
                                    }
                                >
                                    {cat.name}
                                </h3>
                            </div>

                             <div className="flex justify-between items-end mt-8">
                                 <p className="text-xs font-semibold text-slate-500">
                                     {cat.count} Questions
                                 </p>
                                 <button className="bg-brand-dark text-white px-5 py-2 rounded-pill text-xs font-semibold shadow-active active:scale-95 transition-transform">
                                     Explore
                                 </button>
                             </div>
                        </Link>
                    )
                })}
            </section>
            
        </div>
    )
}