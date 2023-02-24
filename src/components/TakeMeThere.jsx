import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Html } from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { useContext, useEffect, useState } from 'react';
import { fetchCountryDesc } from '../util/wikipediaApi';
import CountryDataContext from '../CountryDataContext';
import {
    Heading, Divider, Button,
    Box,
    Link, Text as ChakraText,
    Center
} from "@chakra-ui/react";

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
            <Box fontFamily={'Inter, sans-serif'}>
                <Box color={'#fff'} marginTop={'30vh'} marginLeft={'10vw'} >
                    <Divider orientation='vertical' height={'10px'} borderColor={'#f00'}/>
                    {/* <Divider 
                        width={'0.55vw'} orientation={'vertical'} height={'inherit'} 
                        border={'10px'} borderWidth={'1vw'} borderRadius={'7px'} borderColor={'none'}
                        background={'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'}                    
                    /> */}
                    
                    <Heading width={'30vw'} fontWeight={700} fontSize={'7rem'} _selection={{ backgroundColor: '#ea4c89' }}>
                        {locationHeading}
                    </Heading>
                    
                    <ChakraText width={'30vw'} fontWeight={400} fontSize={'1.5rem'} _selection={{ backgroundColor: '#ea4c89' }}>
                        "Resort aah yes yes, da, vodka, ich schpreche deustch my drugariu" -Boris Savov
                    </ChakraText>

                    <Button 
                        height={'8vh'} width={'18vw'} marginTop={'10vh'} 
                        color={'#000'} fontWeight={700} fontSize={'1.75rem'} textAlign={'center'} 
                        border={'none'} borderRadius={'64px'} 
                        background={'linear-gradient(127.29deg, #8BE3FF -5.93%, #BE8BFF 96.13%)'} 
                        boxShadow={'inset 12px 12px 24px #6FB5CB, inset -24px -24px 48px rgba(0, 0, 0, 0.25)'}
                        onClick={() => setLocation(`/map/${params.country}/learn_more`)}
                    >
                        TAKE ME THERE
                    </Button>
                </Box>
            </Box>

            {/* TODO: refactor code to have only one parent container with shared styling */}
        </Html>
    )
}