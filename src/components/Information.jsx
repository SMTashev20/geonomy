import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AcUnitIcon from '@mui/icons-material/AcUnit';

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
    ClimateGradient
} from './InformationStyles';

function numberToWords(number) {
    const words = {
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

export function Information({ country, population, wealth, climate, ...props }) {
    return(
        <>
            <ParentSection>
                <DarkHeading>{country}</DarkHeading>
                <WhiteHeading>{country}</WhiteHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione similique corporis deleniti quidem quas in recusandae sit accusamus? Vitae soluta officia fugiat consequuntur repudiandae iusto libero ea laboriosam provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione similique corporis deleniti quidem quas in recusandae sit accusamus? Vitae soluta officia fugiat consequuntur repudiandae iusto libero ea laboriosam provident.
                </Paragraph>
                <Image></Image>
                <Statistics>
                    <Population>
                        <PersonIcon style={{ fontSize: 70 }}></PersonIcon>
                        <PopulationText>
                            ~<PopulationGradient>{numberToWords(population)[0].toFixed(1)}</PopulationGradient> {numberToWords(population)[1]} people
                        </PopulationText>
                    </Population>
                    <Finance>
                        <AttachMoneyIcon style={{ fontSize: 70 }}></AttachMoneyIcon>
                        <FinanceText>Very <FinanceGradient>{wealth}</FinanceGradient> area</FinanceText>
                    </Finance>
                    <Climate>
                        <WhatshotIcon style={{ fontSize: 70 }}></WhatshotIcon>
                        <ClimateText><ClimateGradient>{climate}</ClimateGradient> climate</ClimateText>
                    </Climate>
                </Statistics>
            </ParentSection>
        </>
    )
}