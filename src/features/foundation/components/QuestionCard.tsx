// "use-client"

import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { questions } from "../constants/questions";

interface QuestionCardProps {
	questionCategory: string;
	revealQuestion: boolean;
	setRevealQuestion: (value: boolean) => void;
}

export default function QuestionCard({
	questionCategory,
	revealQuestion,
	setRevealQuestion,
}: QuestionCardProps) {
    const filteredQuestions = questions.filter((question) => {
        return question.category.includes(questionCategory);
    });

    const getRandomQuestion = () => {
        const questionNum = Math.floor(Math.random() * filteredQuestions.length);

        return filteredQuestions[questionNum];
    }

	return (
		<>
			<button onClick={() => setRevealQuestion(true)}>Open dialog</button>
			<Dialog
				open={revealQuestion}
				onClose={() => setRevealQuestion(false)}
				className="relative z-50 rounded-full"
			>
				<DialogBackdrop className="fixed inset-0 bg-black/30" />

				<div className="fixed inset-0 flex w-screen items-center justify-center p-4 glass-card">
					<DialogPanel className="max-w-lg space-y-4 border bg-white p-12 border-none rounded">
                        <DialogTitle
                            className="font-bold lowercase rounded-pill 
                            bg-black text-brand-light px-3 w-max"
                        >
                            {questionCategory}
						</DialogTitle>

                        <Description>

                        </Description>

						<p className="text-2xl font-bold text-slate-850 mb-6 font-display leading-tight">
							{getRandomQuestion().title}
                        </p>
                        
                        <input
                            type="textarea"
                            placeholder="answer here"
                            className="bg-brand-light border border-brand-surface p-5 rounded w-full"
                        />

						<div className="flex gap-4">
							<button onClick={() => setRevealQuestion(false)}>
								Cancel
							</button>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
