import { useEffect, useState } from "react";
import { MapLoader } from "./MapLoader";

export function useCountryData(geoJsonUrl) {
    const [loading, setLoading] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState("Loading...");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        new MapLoader().loadAsync(
            geoJsonUrl,
            progress => {
                setLoadingStatus(`${(progress.loaded / progress.total * 100).toFixed(2)}%`);
            },
        )
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setError(error);
            setLoading(false);
        });
    }, []);

    return [loading, loadingStatus, error, data];
}