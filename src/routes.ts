import {
    type RouteConfig,
    route,
    index
} from "@react-router/dev/routes";

export default [
    // * matches all URLs, the ? makes it optional so it will match / as well
    index("./components/home.tsx"),
    route("/contact", "./components/landing/Contact.tsx"),
] satisfies RouteConfig;