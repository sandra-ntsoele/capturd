
import MarriagePrepDashboard from "~/marriage-prep/marriage-prep";
import type { Route } from "./+types/marriage-prep";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Capturd | The Family Operating System"},
        {
            name: "description",
            content: `Questions`,
        },
    ];
}

export default function MarriagePrep() {
    return <MarriagePrepDashboard />;
}
