import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { 
    TemporarySection,
    Container,
    Separator,
    LocationParent,
    LocationHeading,
    LocationDescription,
    FindOutMoreButton
} from './TakeMeThereStyles';

import { Html } from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { useContext, useEffect, useState } from 'react';
import { fetchCountryDesc } from '../util/wikipediaApi';
import CountryDataContext from '../CountryDataContext';

export function TakeMeThere() {
    const [match, params] = useRoute('/map/:country');
    const [location, setLocation] = useLocation();
    const [locationHeading, setLocationHeading] = useState("Thinking...");
    const [locationDescription, setLocationDescription] = useState("Also thinking...");
    const countryDataContext = useContext(CountryDataContext);
    
    useEffect(() => {
        let isMounted = true;
        
        if (countryDataContext.loading) return;

        if (!countryDataContext.data.features
            .map(e => e.properties.ADMIN)
            .includes(decodeURIComponent(params.country))) {
            setLocation('/start');
        } else {
            setLocationHeading(decodeURIComponent(params.country));
            setLocationDescription('Thinking...');

            fetchCountryDesc(decodeURIComponent(params.country))
                .then(desc => {
                    if (isMounted)
                        setLocationDescription(desc);
                })
                .catch(e => {
                    console.error(e);
                    if (isMounted)
                        setLocationDescription('Could not fetch country data.');
                })
        }

        return () => {
            isMounted = false;
        };
    }, [countryDataContext]);
    
    return (
        <Html as='div' fullscreen>
            <TemporarySection>
                <Container>
                    <Separator />
                    <LocationParent>
                        <LocationHeading>{locationHeading}</LocationHeading>
                        <LocationDescription>{locationDescription}</LocationDescription>
                    </LocationParent>
                </Container>
                <FindOutMoreButton onClick={() => setLocation(`/map/${params.country}/learn_more`)}>TAKE ME THERE <ArrowForwardIosIcon style={{ fontSize: "20" }}/></FindOutMoreButton>
            </TemporarySection>
        </Html>
    )
}