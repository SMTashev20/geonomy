// Importing various images & styled components to be used later on in the About section.
import InformationCard from '../../img/html-assets/icons/info.png';
import ClosingButton from '../../img/html-assets/icons/close.png';
import AlexImg from '../../img/html-assets/about/alex.jpg'
import ValueImg from '../../img/html-assets/about/value.jpg'
import StaniImg from '../../img/html-assets/about/stani.jpg'
import MishoImg from '../../img/html-assets/about/misho.jpg'
import {
  Card, 
  GridContainer, 
  CardPictureContainer,
  CardName, 
  CardDescription 
} from './AboutStyles';

import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';

export function About() {
    const [isOpen, setOpen] = useState(false);
    const [rootMatch] = useRoute('/');
    const [startMatch] = useRoute('/start');

    useEffect(() => {
        if (!rootMatch && !startMatch) setOpen(false);
    }, [rootMatch, startMatch]);

    if (!rootMatch && !startMatch) return null;

    if (!isOpen) {
        {/* Styling for the Toggle Open button. */}
        return <button style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            backgroundColor: "transparent",
            backgroundImage: `url('${InformationCard}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            right: "2vw",
            bottom: "3vh",
            border: "none",
            borderRadius: "100%",
        }} onClick={() => setOpen(true)} />
    }

    return (
        <section style={{
            width: "40vw",
            height: "100vh",
            position: "absolute",
            right: "0vw",
            background: "rgba(194, 151, 194, 0.13)",
            border: "1px solid #5E5E5E",
            boxSizing: "border-box",
            backdropFilter: "blur(15px)"
        }}>
            {/* Styling for the Toggle Close button. */}
            <button style={{
                width: "40px",
                height: "40px",
                position: "absolute",
                backgroundColor: "transparent",
                backgroundImage: `url('${ClosingButton}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                right: "37vw",
                top: "1.5vh",
                border: "none",
                borderRadius: "100%",
            }} onClick={() => setOpen(false)}>
            </button>

            {/* Displaying the "About us" heading */}
            <h3 style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Raleway, sans-serif",
                fontSize: "90px",
                fontWeight: "bold"
            }}>
                About us
            </h3>
            
            {/* Styling for every individual card. */}
            <Card>
                {/* Parent element, meant to structure everything using CSS Grid. */}
                <GridContainer>
                    {/* Every team member's photo gets displayed. */}
                    <CardPictureContainer style={{ backgroundImage: `url(${ AlexImg })` }}></CardPictureContainer>
        
                    {/* Displaying the team member's name. */}
                    <CardName>Alexander Manov</CardName>

                    {/* Describing the team member. */}
                    <CardDescription>
                        Our Backend Developer. Worked on map parsing and visualization on the globe. Worked on connecting the Wikipedia and country stats APIs.
                    </CardDescription>
                </GridContainer>
            </Card>
    
            {/* Styling for every individual card. */}
            <Card>
                {/* Parent element, meant to structure everything using CSS Grid. */}
                <GridContainer>
                    {/* Every team member's photo gets displayed. */}
                    <CardPictureContainer style={{ backgroundImage: `url(${ ValueImg })` }}></CardPictureContainer>
        
                    {/* Displaying the team member's name. */}
                    <CardName>Valeri Ivanov</CardName>

                    {/* Describing the team member. */}
                    <CardDescription>
                        Our Frontend Developer. Worked on the designs made by himself and the designer - Mihail Petrov. He also implemented <strong>all of</strong> them to CSS and HTML.
                    </CardDescription>
                </GridContainer>
            </Card>
    
            {/* Styling for every individual card. */}
            <Card>
                {/* Parent element, meant to structure everything using CSS Grid. */}
                <GridContainer>
                    {/* Every team member's photo gets displayed. */}
                    <CardPictureContainer style={{ backgroundImage: `url(${ StaniImg })` }}></CardPictureContainer>

                    {/* Displaying the team member's name. */}
                    <CardName>Stanislav Tashev</CardName>

                    {/* Describing the team member. */}
                    <CardDescription>
                        Our Scrum Trainer. Worked on the documentation and the presentation. Helped with writing some of the comments in the code. He also managed the team very well.
                    </CardDescription>
                </GridContainer>
            </Card>
            
            {/* Styling for every individual card. */}
            <Card>
                {/* Parent element, meant to structure everything using CSS Grid. */}
                <GridContainer>
                    {/* Every team member's photo gets displayed. */}
                    <CardPictureContainer style={{ backgroundImage: `url(${ MishoImg })` }}></CardPictureContainer>
                    
                    {/* Displaying the team member's name. */}
                    <CardName>Mihail Petrov</CardName>

                    {/* Describing the team member. */}
                    <CardDescription>
                        Our Designer. Worked <strong>primarily</strong> on the designs and implemented ErrorBoundary.jsx as well as the infamous noscript page.
                    </CardDescription>
                </GridContainer>
            </Card>
        </section>
    )
} 