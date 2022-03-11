import { useEffect, useState } from "react";
import { FileLoader } from "three";

export function useCountryData(geoJsonUrl) {
    const [loading, setLoading] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState("Loading...");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        new FileLoader().loadAsync(
            geoJsonUrl,
            progress => {
                setLoadingStatus(`${progress.loaded}/${progress.total}`);
            },
        )
        .then(data => {
            setData(JSON.parse(data));
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

    return [loading, loadingStatus, error, data];
}