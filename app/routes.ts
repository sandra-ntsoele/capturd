import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/marriage-prep", "routes/marriage-prep.tsx")
] satisfies RouteConfig;
