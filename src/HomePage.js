import { Card, Container, Row } from "react-bootstrap"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function HomePage() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolled2, setIsScrolled2] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (window.matchMedia('(min-width: 600px)').matches) {
        //601+
        if (scrollTop >= 200) {
            setIsScrolled(true);
        } if (scrollTop >= 1200) {
            setIsScrolled2(true)
        }
    } else {
        //600-
        if (scrollTop >= 600) {
            setIsScrolled(true);
        } if (scrollTop >= 1350) {
            setIsScrolled2(true)
        }
    }
    }

    function secondRow() {
        return (
        <div className="HeadingText col-12 col-md-6">
            <div class="slide-right">
                <p className="StartingAt">As low as</p>
                <p className="fifthteenD">$15</p>
                <p className="for12months">Per month for 12 months</p>
            </div>
        </div>
        )
    }

    function thirdRow() {
        return (
        <div className="HeadingText col-12 col-md-6">
            <div class="slide-right">
                <p>Interested?</p>
            </div>
        </div>
        )
    }


    return (
        <div>
            <Container>
                <Row className="homePageRowOne">
                    <div className="HeadingText col-12 col-md-6">
                        <div class="slide-right">
                            <p>Do you</p>
                            <p>need a</p>
                            <p>website?</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card className="PageCard">
                            <Card className="PageCard iCard">
                                <Card.Img src="images/me.jpg"/>
                            </Card>
                            <Card.Body>
                                <Card.Header>Rylan Workman</Card.Header>
                                <Card.Text>
                                My name is Rylan and I have a passion for coding! 
                                I can develop your or your organization's site with care. With me, 
                                you can be sure you're getting the best in quality and
                                customer service. From custom designs to regular 
                                maintenance, I'm here to help. Once we're done, the
                                site file is yours or I can host it for you, your choice.
                                Contact me today and let's get started on your website project!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <center>
                        <div className="scroll">
                            <div className="mouse">
                                <div className="mouse-wheel"></div>
                            </div>
                            <p className="scrollD">
                                Scroll Down
                            </p>
                        </div>
                    </center>
                </Row>
                <Row className="homePageRowTwo">
                {isScrolled ? (
                    secondRow()
                ) : <div className="col-12 col-md-6 secondSlideFillIn"></div>}
                <div className="col-12 col-md-6">
                    <Card className="PageCard Card2">
                        <Card.Body>
                            <Card.Header>For as low as $15</Card.Header>
                            <Card.Text>
                                If you want a basic, but well-designed site to advertise your service, project or product, 
                                then this is for you! This includes the development of the site, hosting 
                                and the domain name {`(www.example.com)`}. <br/> *If paid in full
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </Row>
                <Row>
                {isScrolled2 ? (
                    thirdRow()
                ) : <div className="col-12 col-md-6 thirdSlideFillIn"></div>}
                <div className="col-12 col-md-6">
                    <Card className="PageCard lastCard">
                        <Card.Body>
                            <Card.Header>Reach out!</Card.Header>
                            <Card.Text>
                                If you would like to find out more about this service, feel free to check out
                                my <Link to="/pricing" className="ROLink">pricing</Link> and get in <Link to="/contact" className="ROLink">contact</Link> with me!
                                If you're looking for something specific, still feel free to ask!  
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </Row>
            </Container>
            <footer>
                <Container>
                    <Row>
                    <div className="col-6">
                    Rylan Workman<br/>
                    RylanDeveloper@gmail.com
                    </div>
                    <div className="col-3 col-md-4 col-xl-5"></div>
                    <div className="col-3 col-md-2 col-xl-1">
                    <Link to="/contact" className="FLink">Contact</Link>
                        <br/>
                    <Link to="/pricing" className="FLink">Pricing</Link>
                    </div>
                    </Row>
                </Container>
            </footer>
{/* __________        .__                   __      __             __                          
    \______   \___.__.|  | _____    ____   /  \    /  \___________|  | __ _____ _____    ____  
     |       _<   |  ||  | \__  \  /    \  \   \/\/   /  _ \_  __ \  |/ //     \\__  \  /    \ 
     |    |   \\___  ||  |__/ __ \|   |  \  \        (  <_> )  | \/    <|  Y Y  \/ __ \|   |  \
     |____|_  // ____||____(____  /___|  /   \__/\  / \____/|__|  |__|_ \__|_|  (____  /___|  /
           \/ \/               \/     \/         \/                   \/     \/     \/     \/  */}
        </div>
    )
}
export default HomePage