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

export function TakeMeThere() {
    return(
        <>
            <TemporarySection>
                <Container>
                    <Separator />
                    <LocationParent>
                        <LocationHeading>Florida</LocationHeading>
                        <LocationDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo quidem iste ratione eos. Repudiandae quod, sapiente adipisci necessitatibus</LocationDescription>
                    </LocationParent>
                </Container>
                <FindOutMoreButton>TAKE ME THERE <ArrowForwardIosIcon style={{ fontSize: "20" }}/></FindOutMoreButton>
            </TemporarySection>
        </>
    )
}