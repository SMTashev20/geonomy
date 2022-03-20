import { Html } from "@react-three/drei"
import { useContext, useEffect, useState } from "react";
import { useRoute } from "wouter"
import CountryDataContext from "../CountryDataContext";
import { Information } from "./Information"

export function CoordinateScreen({ ...props }) {
    const [match, params] = useRoute('/map/:country/learn_more');
    const [country, setCountry] = useState(null);
    const [countryData, setCountryData] = useState();
    const countryDataContext = useContext(CountryDataContext);

    useEffect(() => {
        let isMounted = true;
        
        if (countryDataContext.loading || !isMounted) return;

        if (!countryDataContext.data.features
            .map(e => e.properties.ADMIN)
            .includes(decodeURIComponent(params.country))) {
            setLocation('/start');
        } else {
            setCountry(decodeURIComponent(params.country));
            let data = countryDataContext.data.features.filter(e => e.properties.ADMIN === decodeURIComponent(params.country))[0];

            setCountryData(data);
        }

        return () => isMounted = false;
    }, [countryDataContext]);

    return country ?
        <Html
            as='div'
            fullscreen
            position={[0, 0, 0]}
        >
            <Information country={country} countryData={countryData} />
       </Html>
    : null
}