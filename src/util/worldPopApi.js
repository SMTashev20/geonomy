import { useEffect, useState } from "react";

const NINJA_ENDPOINT = 'https://worldpop-api-passthrough.herokuapp.com';

export function useCountryStats(countryName) {
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        let isMounted = true;

        fetch(`${NINJA_ENDPOINT}/country/${encodeURIComponent(countryName)}`)
            .then(res => res.json())
            .then(res => {
                if (res.error) throw res;
                else setStats(res);

                setLoading(false);
            })
            .catch(e => {
                console.error(e);

                setError(e);
                setLoading(false);
            })

        return () => isMounted = false;
    }, []);

    return [loading, error, stats];
}