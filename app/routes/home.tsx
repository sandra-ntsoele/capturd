import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
    return [
	    {title: "Capturd | The Family Operating System"},
        {
            name: "description",
            content: `A suite of intentional tools for couples. 
            Align your values with Foundation and secure your
            legacy with the File of Life.`,
        },
	];
}

export default function Home() {
	return <Welcome />;
}
