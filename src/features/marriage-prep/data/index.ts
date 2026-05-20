import type { Question } from "../types/Question";
import { childrenQuestions } from "./childrenQuestions";
import { conflictQuestions } from "./conflictQuestions";
import { entertainmentQuestion } from "./entertainmentQuestion";
import { friendsQuestions } from "./friendsQuestions";
import { healthSicknessQuestion } from "./healthSicknessQuestions";
import { husbandAndWifeQuestion } from "./husbandWifeQuestions";
import { lifestyleQuestions } from "./lifestyleQuestions";
import { theologyQuestions } from "./theologyQuestions";
import { workQuestions } from "./workQuestions";
import { worshipQuestions } from "./worshipQuestions";

export const questions: Question[] = [
	...conflictQuestions,
	...entertainmentQuestion,
	...friendsQuestions,
	...healthSicknessQuestion,
	...husbandAndWifeQuestion,
	...lifestyleQuestions,
	...theologyQuestions,
	...workQuestions,
	...worshipQuestions,
	...childrenQuestions,
];
