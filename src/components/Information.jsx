import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { 
    SectionController,
    DarkCountryHeading,
    WhiteCountryHeading,
    Paragraph,
    Image,
    Statistics,
    Population,
    PopulationText,
    PopulationGradient,
    Finance,
    FinanceText,
    FinanceGradient,
    Climate,
    ClimateText,
    ClimateGradient,
    InformationBackButton
} from './InformationStyles';

import {
    Box, Center,
    Image as ChakraImage, Button,
    Text as ChakraText, Heading,
    Grid, GridItem, Flex, Spacer,
    Stack, HStack, VStack
} from "@chakra-ui/react";

import { 
    PhoneIcon, 
} from '@chakra-ui/icons'
// more icons tba

import { useState, useEffect, useContext } from 'react';
import { fetchCountryDesc, fetchCountryImage } from '../util/wikipediaApi';
import { useCountryStats } from '../util/worldPopApi';
import { useLocation } from 'wouter';

function numberToWords(number) {
    const words = {
        'Billion': 1000000000,
        'Million': 1000000,
        'Hundred Thousand': 100000,
        'Thousand': 1000
    };

    for (let key in words) {
        if (words[key] <= number) {
            return [number / words[key], key];
        }
    }

    return [number];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function Information({ country, countryData, ...props }) {
    const [countryText, setCountryText] = useState("Thinking...");
    const [locationDesc, setLocationDesc] = useState("Also thinking...");
    const [randomNumber, setRandomNumber] = useState(-1);
    const [statsLoading, statsError, stats] = useCountryStats(countryData.properties.ADMIN)
    const [imageLoading, setImageLoading] = useState(true);
    const [imageURL, setImageURL] = useState(null);
    const [location, setLocation] = useLocation();

    useEffect(() => {
        let isMounted = true;
        
        setCountryText(country);
        setLocationDesc('Thinking...');
        setRandomNumber(getRandomInt(0, 5));

        fetchCountryDesc(country)
            .then(desc => {
                if (isMounted)
                    setLocationDesc(desc);
            })
            .catch(e => {
                console.error(e);
                if (isMounted)
                    setLocationDesc('Could not fetch country data.');
            })
        
        fetchCountryImage(country)
            .then(url => {
                if (!isMounted) return;
                setImageURL(url);
                setImageLoading(false);
            })
            .catch(e => console.error(e));

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <Box height={'200vh'} width={'100vw'} backgroundColor={'#0E0034'} fontFamily={'Inter, sans-serif'}_selection={{ backgroundColor: '#ea4c89' }}>
            {/* <IconButton aria-label={'Return to preview page'} /> */}
            <Box height={'30vh'} marginLeft={'2vw'}>
                <Heading position={'absolute'} as={'h1'} fontSize={'20.5rem'} fontWeight={700} color={'#160643'} marginTop={'-5.5vw'} userSelect={'none'}>{countryText}</Heading>
                <Heading position={'absolute'} as={'h1'} fontSize={'14rem'} fontWeight={700} color={'#FFF'}>{countryText}</Heading>
            </Box>
            <ChakraImage position={'absolute'} h={'50vh'} w={'100vw'} src='https://media.discordapp.net/attachments/884052584762077245/1071387540961099846/wave.png' userSelect={'none'}/>
            {/* chore: replace absolute link */}
            <Box height={'70vh'}>
                <Center>
                    <Grid   
                        h={'140vh'}
                        w={'100vw'}
                        zIndex={2}
                        templateRows={'repeat(5, 1fr)'}
                        templateColumns={'repeat(13, 1fr)'}
                        gap={'5vw'}
                        marginTop={'10vh'}
                        fontFamily={'Inter, sans-serif'}
                    >
                        {/* start of first row */}
                        <GridItem borderRadius={'2vh'} rowStart={1} rowSpan={1} colStart={2}  colEnd={5}  bg='papayawhip'>
                            <Box>
                                <Center>
                                    <Box
                                        h={'6vh'} w={'6vh'} marginTop={'3vh'}
                                        border={'1px solid #B49FBC'} borderRadius={'100%'} backgroundColor={'red'}
                                    />
                                </Center>
                                <Center marginTop={'2vh'} fontSize={'2.25rem'} fontWeight={700}>
                                    <ChakraText>~</ChakraText>
                                    <ChakraText>22 </ChakraText>
                                    <ChakraText> million people</ChakraText>
                                </Center>
                            </Box>
                        </GridItem>
                        
                        <GridItem borderRadius={'2vh'} rowStart={1} rowSpan={1} colStart={6}  colEnd={9}  bg='papayawhip'>
                            <Box>
                                <Center>
                                    <Box
                                        h={'6vh'} w={'6vh'} marginTop={'3vh'}
                                        border={'1px solid #B49FBC'} borderRadius={'100%'} backgroundColor={'red'}
                                    />
                                </Center>
                                <Center marginTop={'2vh'} fontSize={'2.25rem'} fontWeight={700}>
                                    <ChakraText>~</ChakraText>
                                    <ChakraText>22 </ChakraText>
                                    <ChakraText> million people</ChakraText>
                                </Center>
                            </Box>
                        </GridItem>
                        
                        <GridItem borderRadius={'2vh'} rowStart={1} rowSpan={1} colStart={10} colEnd={13} bg='papayawhip'>
                            <Box>
                                <Center>
                                    <Box
                                        h={'6vh'} w={'6vh'} marginTop={'3vh'}
                                        border={'1px solid #B49FBC'} borderRadius={'100%'} backgroundColor={'red'}
                                    />
                                </Center>
                                <Center marginTop={'2vh'} fontSize={'2.25rem'} fontWeight={700}>
                                    <ChakraText>~</ChakraText>
                                    <ChakraText>22 </ChakraText>
                                    <ChakraText> million people</ChakraText>
                                </Center>
                            </Box>
                        </GridItem>

                        {/* start of second row */}
                        <GridItem borderRadius={'2vh'} rowStart={2} rowSpan={1} colStart={2}  colEnd={5}  bg='papayawhip'>
                            <Box>
                                <Center>
                                    <Box
                                        h={'6vh'} w={'6vh'} marginTop={'3vh'}
                                        border={'1px solid #B49FBC'} borderRadius={'100%'} backgroundColor={'red'}
                                    />
                                </Center>
                                <Center marginTop={'2vh'} fontSize={'2.25rem'} fontWeight={700}>
                                    <ChakraText>~</ChakraText>
                                    <ChakraText>22 </ChakraText>
                                    <ChakraText> million people</ChakraText>
                                </Center>
                            </Box>
                        </GridItem>
                        
                        <GridItem borderRadius={'2vh'} rowStart={2} rowSpan={1} colStart={6}  colEnd={9}  bg='papayawhip'>
                            <Box>
                                <Center>
                                    <Box
                                        h={'6vh'} w={'6vh'} marginTop={'3vh'}
                                        border={'1px solid #B49FBC'} borderRadius={'100%'} backgroundColor={'red'}
                                    />
                                </Center>
                                <Center marginTop={'2vh'} fontSize={'2.25rem'} fontWeight={700}>
                                    <ChakraText>~</ChakraText>
                                    <ChakraText>22 </ChakraText>
                                    <ChakraText> million people</ChakraText>
                                </Center>
                            </Box>
                        </GridItem>
                        
                        <GridItem borderRadius={'2vh'} rowStart={2} rowSpan={1} colStart={10} colEnd={13} bg='papayawhip'>
                            <Box>
                                <Center>
                                    <Box
                                        h={'6vh'} w={'6vh'} marginTop={'3vh'}
                                        border={'1px solid #B49FBC'} borderRadius={'100%'} backgroundColor={'red'}
                                    />
                                </Center>
                                <Center marginTop={'2vh'} fontSize={'2.25rem'} fontWeight={700}>
                                    <ChakraText>~</ChakraText>
                                    <ChakraText>22 </ChakraText>
                                    <ChakraText> million people</ChakraText>
                                </Center>
                            </Box>
                        </GridItem>
                    </Grid>
                </Center>
            </Box>
        </Box>
        // <SectionController>
        //     <DarkCountryHeading>{countryText}</DarkCountryHeading>
        //     <WhiteCountryHeading>{countryText}</WhiteCountryHeading>
        //     <Paragraph>{locationDesc}</Paragraph>
        //     {/* {imageLoading ? <Image /> :
        //         <Image style={{backgroundImage: imageURL}} />} */}
        //     <Image style={{backgroundImage: imageLoading ? '' : `url(${imageURL})`, backgroundSize: '100% 100%'}} />
        //     <Statistics>
        //         <Population>
        //             <PersonIcon style={{ fontSize: 70 }}></PersonIcon>
        //             <PopulationText>
        //                 {statsLoading && !statsError ? <PopulationGradient>Thinking...</PopulationGradient> :
        //                     <>
        //                         ~<PopulationGradient>
        //                             {stats ? numberToWords(stats.population * 1000)[0].toFixed(1) : "¯\\_(ツ)_/¯"}
        //                         </PopulationGradient> {stats ? numberToWords(stats.population * 1000)[1] : ""} people
        //                     </>}
        //             </PopulationText>
        //         </Population>
        //         <Finance>
        //             <AttachMoneyIcon style={{ fontSize: 70 }}></AttachMoneyIcon>
        //             <FinanceText>
        //                 {statsLoading && !statsError ? <FinanceGradient>Thinking...</FinanceGradient> :
        //                     <>The currency is <FinanceGradient>{stats ? stats.currency.code : "¯\\_(ツ)_/¯"}</FinanceGradient> ({stats ? stats.currency.name : "¯\\_(ツ)_/¯"})</>}
        //             </FinanceText>
        //         </Finance>
        //         <Climate>
        //             <WhatshotIcon style={{ fontSize: 70 }}></WhatshotIcon>
        //             <ClimateText>
        //                 {statsLoading ? 
        //                     <ClimateGradient>Thinking...</ClimateGradient> :
        //                     <ClimateGradient>
        //                         {stats ? stats[['gdp', 'region', 'unemployment', 'co2_emissions', 'capital'][randomNumber]] : "¯\\_(ツ)_/¯"}
        //                     </ClimateGradient>}
        //                 {statsLoading ? 
        //                     "" : [' USD (GDP)', ' is the region', '% (unemployment)', ' CO2e (emissions)', ' is the capital'][randomNumber]}
        //             </ClimateText>
        //         </Climate>
        //             <ArrowBackIcon onClick={() => setLocation('/start')} style={{ fontSize: 50, position: "absolute", bottom: "30px", left: "30px", color: "#C4C4C4" }}/>
        //     </Statistics>
        // </SectionController>
    )
}