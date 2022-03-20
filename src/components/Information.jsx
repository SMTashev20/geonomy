import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { 
    ParentSection,
    DarkHeading,
    WhiteHeading,
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
        <ParentSection>
            <DarkHeading>{countryText}</DarkHeading>
            <WhiteHeading>{countryText}</WhiteHeading>
            <Paragraph>{locationDesc}</Paragraph>
            {/* {imageLoading ? <Image /> :
                <Image style={{backgroundImage: imageURL}} />} */}
            <Image style={{backgroundImage: imageLoading ? '' : `url(${imageURL})`, backgroundSize: '100% 100%'}} />
            <Statistics>
                <Population>
                    <PersonIcon style={{ fontSize: 70 }}></PersonIcon>
                    <PopulationText>
                        {statsLoading && !statsError ? <PopulationGradient>Thinking...</PopulationGradient> :
                            <>
                                ~<PopulationGradient>
                                    {stats ? numberToWords(stats.population * 1000)[0].toFixed(1) : "¯\\_(ツ)_/¯"}
                                </PopulationGradient> {stats ? numberToWords(stats.population * 1000)[1] : ""} people
                            </>}
                    </PopulationText>
                </Population>
                <Finance>
                    <AttachMoneyIcon style={{ fontSize: 70 }}></AttachMoneyIcon>
                    <FinanceText>
                        {statsLoading && !statsError ? <FinanceGradient>Thinking...</FinanceGradient> :
                            <>The currency is <FinanceGradient>{stats ? stats.currency.code : "¯\\_(ツ)_/¯"}</FinanceGradient> ({stats ? stats.currency.name : "¯\\_(ツ)_/¯"})</>}
                    </FinanceText>
                </Finance>
                <Climate>
                    <WhatshotIcon style={{ fontSize: 70 }}></WhatshotIcon>
                    <ClimateText>
                        {statsLoading ? 
                            <ClimateGradient>Thinking...</ClimateGradient> :
                            <ClimateGradient>
                                {stats ? stats[['gdp', 'region', 'unemployment', 'co2_emissions', 'capital'][randomNumber]] : "¯\\_(ツ)_/¯"}
                            </ClimateGradient>}
                        {statsLoading ? 
                            "" : [' USD (GDP)', ' is the region', '% (unemployment)', ' CO2e (emissions)', ' is the capital'][randomNumber]}
                    </ClimateText>
                </Climate>
                    <ArrowBackIcon onClick={() => setLocation('/start')} style={{ fontSize: 50, position: "absolute", bottom: "30px", left: "30px", color: "#C4C4C4" }}/>
            </Statistics>
        </ParentSection>
    )
}