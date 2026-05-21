import {
	Sparkles,
	BookOpen,
	Heart,
	Baby,
	Home,
	Coffee,
	MessageCircle,
	Briefcase,
	Users,
	Stethoscope,
} from "lucide-react";
import type { ForwardRefExoticComponent } from "react";
import { questions } from "../data";
import type { Category } from "../types/Category";

interface DashboardCategory {
	name: Category;
	icon: ForwardRefExoticComponent<any>;
	color: string;
    questionCount: number;
    isFeatured?: boolean 
}

const questionCount = (category: Category) => {
	return questions.filter((question) => question.category === category)
		.length;
};

export const dashboardCategoryList: DashboardCategory[] = [
	{
		name: "Theology",
		icon: Sparkles,
		color: "bg-indigo-50 text-indigo-600",
        questionCount: questionCount("Theology"),
        isFeatured: true
	},
	{
		name: "Worship and Devotion",
		icon: BookOpen,
		color: "bg-blue-50 text-blue-600",
        questionCount: questionCount("Worship and Devotion"),
        isFeatured: false
	},
	{
		name: "Husband and Wife",
		icon: Heart,
		color: "bg-rose-50 text-rose-600",
        questionCount: questionCount("Husband and Wife"),
        isFeatured: false
	},
	{
		name: "Children",
		icon: Baby,
		color: "bg-amber-50 text-amber-600",
        questionCount: questionCount("Children"),
        isFeatured: true
	},
	{
		name: "Lifestyle",
		icon: Home,
		color: "bg-emerald-50 text-emerald-600",
        questionCount: questionCount("Lifestyle"),
        isFeatured: false
	},
	{
		name: "Entertainment",
		icon: Coffee,
		color: "bg-purple-50 text-purple-600",
        questionCount: questionCount("Entertainment"),
        isFeatured: false
	},
	{
		name: "Conflict",
		icon: MessageCircle,
		color: "bg-orange-50 text-orange-600",
		questionCount: questionCount("Conflict"),
        isFeatured: true
	},
	{
		name: "Work",
		icon: Briefcase,
		color: "bg-slate-50 text-slate-600",
        questionCount: questionCount("Work"),
        isFeatured: false
	},
	{
		name: "Friends",
		icon: Users,
		color: "bg-cyan-50 text-cyan-600",
        questionCount: questionCount("Friends"),
        isFeatured: false
	},
	{
		name: "Health and Sickness",
		icon: Stethoscope,
		color: "bg-red-50 text-red-600",
        questionCount: questionCount("Health and Sickness"),
        isFeatured: true
	},
];
