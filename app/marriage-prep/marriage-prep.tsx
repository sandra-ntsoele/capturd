import QuestionCard from "@/features/marriage-prep/components/QuestionCard";
import { dashboardCategoryList } from "@/features/marriage-prep/constants/dashboardCategoryList";
import { useState } from "react";

export default function MarriagePrepDashboard() {
	const [revealQuestion, setRevealQuestion] = useState<boolean>(false);
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	let cardIsFeatured = false;

	const toggleQuestionCard = (selectedCategory: string) => {
		setSelectedCategory(selectedCategory);
		setRevealQuestion(!revealQuestion);
	};

	return (
		<div className="min-h-screen bg-brand-light selection:bg-accent-pink/20">
			<section
				className="px-6 pt-16 pb-24 max-w-7xl mx-auto grid 
                    grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
			>
				{dashboardCategoryList.map((cat, index) => {
					const isFeatured = index % 3 === 0;

					return (
						<div
							key={cat.name}
							className={`col-span-${index} grid-flow-dense relative 
                                glass-card p-10 w-full 
                                shadow-2xl border-white/80 z-10
                                transform-gpu hover:scale-115
                                flex flex-col justify-between
                                cursor-pointer
                                ${
									isFeatured
										? "lg:col-span-2 lg:row-span-2 min-h-[400px] gradient-blue-soft"
										: "col-span-1 min-h-[200px] gradient-pink-soft"
								}`}
							onClick={() => toggleQuestionCard(cat.name)}
						>
							<div>
								<span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
									<cat.icon className={cat.color} />
								</span>
								<h3
									className={`font-display font-bold mt-2 
                                        text-3xl`}
								>
									{cat.name}
								</h3>
							</div>

							<div className="flex justify-between items-end mt-8 gap-3">
								<div style={{ width: "60%" }}>
									<p className="text-xs font-semibold text-slate-500">
										{cat.questionCount} Questions
									</p>
									<progress
										id="file"
										value={cat.questionCount / 3}
										max={cat.questionCount}
										className="w-full bg-brand-surface hidden"
									>
										32%
									</progress>
								</div>
								<button
									className="bg-brand-dark text-white px-5 py-2 rounded-pill text-xs font-semibold shadow-active active:scale-95 transition-transform"
									onClick={(e) => {
										e.stopPropagation();
										toggleQuestionCard(cat.name);
									}}
								>
									Explore
								</button>
							</div>
						</div>
					);
				})}
			</section>

			<QuestionCard
				questionCategory={selectedCategory}
				revealQuestion={revealQuestion}
				setRevealQuestion={setRevealQuestion}
				bgColor={
					cardIsFeatured ? "gradient-blue-soft" : "gradient-pink-soft"
				}
			/>
		</div>
	);
}