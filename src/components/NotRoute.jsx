import { useEffect } from "react";
import { useRoute } from "wouter";

export function NotRoute({ path, children }) {
    const [match, params] = useRoute(path);

    if (!match)
        return children;
    else return null;
}