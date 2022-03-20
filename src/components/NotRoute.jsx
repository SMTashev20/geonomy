import { useRoute } from "wouter";

// Check whether the current path is a route.
export function NotRoute({ path, children }) {
    const [match, params] = useRoute(path);

    if (!match)
        return children;
    else return null;
}