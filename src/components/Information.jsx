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

export function Information() {
    return(
        <>
            <ParentSection>
                <DarkHeading>Florida</DarkHeading>
                <WhiteHeading>Florida</WhiteHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione similique corporis deleniti quidem quas in recusandae sit accusamus? Vitae soluta officia fugiat consequuntur repudiandae iusto libero ea laboriosam provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione similique corporis deleniti quidem quas in recusandae sit accusamus? Vitae soluta officia fugiat consequuntur repudiandae iusto libero ea laboriosam provident.
                </Paragraph>
                <Image></Image>
                <Statistics>
                    <Population>
                        <PersonIcon style={{ fontSize: 70 }}></PersonIcon>
                        <PopulationText>~<PopulationGradient>22</PopulationGradient> million people</PopulationText>
                    </Population>
                    <Finance>
                        <AttachMoneyIcon style={{ fontSize: 70 }}></AttachMoneyIcon>
                        <FinanceText>- Very <FinanceGradient>wealthy</FinanceGradient> area</FinanceText>
                    </Finance>
                    <Climate>
                        <WhatshotIcon style={{ fontSize: 70 }}></WhatshotIcon>
                        <ClimateText> - <ClimateGradient>Hot</ClimateGradient> climate</ClimateText>
                    </Climate>
                </Statistics>
            </ParentSection>
        </>
    )
}