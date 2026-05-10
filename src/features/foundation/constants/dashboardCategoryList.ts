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
    IconNode,
} from "lucide-react";
import { Category } from "../types/Category";
import { ForwardRefExoticComponent } from "react";

interface DashboardCategory {
    name: Category
    icon: ForwardRefExoticComponent<any>,
    color: string,
    questionCount: number
}

export const dashboardCategoryList: DashboardCategory[] = [
	{
		name: "Theology",
		icon: Sparkles,
		color: "bg-indigo-50 text-indigo-600",
		questionCount: 12,
	},
	{
		name: "Worship and Devotion",
		icon: BookOpen,
		color: "bg-blue-50 text-blue-600",
		questionCount: 8,
	},
	{
		name: "Husband and Wife",
		icon: Heart,
		color: "bg-rose-50 text-rose-600",
		questionCount: 15,
	},
	{
		name: "Children",
		icon: Baby,
		color: "bg-amber-50 text-amber-600",
		questionCount: 10,
	},
	{
		name: "Lifestyle",
		icon: Home,
		color: "bg-emerald-50 text-emerald-600",
		questionCount: 14,
	},
	{
		name: "Entertainment",
		icon: Coffee,
		color: "bg-purple-50 text-purple-600",
		questionCount: 9,
	},
	{
		name: "Conflict",
		icon: MessageCircle,
		color: "bg-orange-50 text-orange-600",
		questionCount: 18,
	},
	{
		name: "Work",
		icon: Briefcase,
		color: "bg-slate-50 text-slate-600",
		questionCount: 11,
	},
	{
		name: "Friends",
		icon: Users,
		color: "bg-cyan-50 text-cyan-600",
		questionCount: 7,
	},
	{
		name: "Health and Sickness",
		icon: Stethoscope,
		color: "bg-red-50 text-red-600",
		questionCount: 6,
	},
];
