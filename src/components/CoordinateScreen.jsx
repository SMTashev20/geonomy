import { OrbitControls, Html } from "@react-three/drei"
import { useContext, useEffect } from "react";
import { useRoute } from "wouter"
import CountryDataContext from "../CountryDataContext";
import { Information } from "./Information"

export function CoordinateScreen({ ...props }) {
    const [match, params] = useRoute('/map/:country/learn_more');
    const countryDataContext = useContext(CountryDataContext);

    useEffect(() => {
        console.log(countryData);
    }, []);

    return <>
        <OrbitControls enablePan={false} minDistance={3} maxDistance={10} minPolarAngle={0.5} maxPolarAngle={2.2}/>
        <Html
            as='div'
            fullscreen
            position={[0, 0, 0]}
            style={{
                backgroundColor: "white"
            }}

        >
            <Information country="Bulgaria" population={6927000} climate="Warm" wealth="Moderately wealthy" />
       </Html>
    </>
}