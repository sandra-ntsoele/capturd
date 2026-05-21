import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

interface ErrorQuestionCardProps {
    revealQuestion: boolean;
	setRevealQuestion: (value: boolean) => void;
}

export default function ErrorQuestionCard({
    revealQuestion,
	setRevealQuestion,
}: ErrorQuestionCardProps) {
    return (
        <>
            <Dialog
                open={revealQuestion}
                onClose={() => setRevealQuestion(false)}
                className="relative z-50 rounded-full"
            >
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4 glass-card gap-4">
                    <DialogPanel
                        className={`max-w-lg space-y-4 border bg-white p-12 border-none rounded gradient-error-soft`}
                    >
                        <DialogTitle
                            className="font-bold lowercase rounded-pill 
                            bg-black text-brand-light px-3 w-max"
                        >
                            Error
                        </DialogTitle>

                        <Description className="text-2xl font-bold text-slate-850 mb-6 font-display leading-tight">
                            Error loading question
                        </Description>

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