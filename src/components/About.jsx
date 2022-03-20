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
export function About() {
    return (
        <>
            {/* Styling for the Toggle Open button. */}
            <button style={{
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
            }}>
            </button>

            {/* Styling for the About section. */}
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
                }}>
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </CardDescription>
                    </GridContainer>
                </Card>
            </section>
          </>
    )
} 