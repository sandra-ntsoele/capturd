import { Category } from "./Category";

export type Question = {
	sequence: number;
	title: string;
	category: Category;
};