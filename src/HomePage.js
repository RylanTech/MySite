import { Card, Container, Row } from "react-bootstrap"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function HomePage(props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolled2, setIsScrolled2] = useState(false);

    const [SAclassName, setSAclassName] = useState("StartingAt")
    const [FDclassName, setFDclassName] = useState("fifthteenD")
    const [gitClassName, setGitClassName] = useState("git")

    let cards = document.getElementsByClassName("PageCard");

    useEffect(() => {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style = props.cardColor;
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [props.theme]);

    useEffect(() => {
        console.log(props.textColor)
        if (props.textColor === "color: white;") {
            setSAclassName("StartingAt")
            setFDclassName("fifthteenD")
            setGitClassName("gitTwo")

        } else if (props.textColor === "color: black") {
            setSAclassName("StartingAtTwo")
            setFDclassName("fifthteenDTwo")
            setGitClassName("git")
        }
    },[props])

    const handleScroll = () => {
        // Get the current scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (window.matchMedia('(min-width: 600px)').matches) {
            //768+
            if (scrollTop >= 768) {
                setIsScrolled(true);
            } if (scrollTop >= 1200) {
                setIsScrolled2(true)
            }
        } else {
            //768-
            if (scrollTop >= 768) {
                setIsScrolled(true);
            } if (scrollTop >= 1350) {
                setIsScrolled2(true)
            }
        }
    }

    function secondRow() {
        return (
            <div className="HeadingText col-12 col-md-6">
                <div className="slide-right">
                    <a className={gitClassName} target="_blank" href="https://calendly.com/rylantech/web-requirements">
                        <p className={SAclassName}>Get in</p>
                        <p className={FDclassName}>Touch</p>
                    </a>
                </div>
            </div>
        )
    }

    function thirdRow() {
        return (
            <div className="HeadingText col-12 col-md-6">
                <div className="slide-right">
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
                        <div className="slide-right">
                            <p>Do you</p>
                            <p>need a</p>
                            <p>website?</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card className="PageCard">
                            <Card className="PageCard iCard">
                                <Card.Img src="images/me.jpg" />
                            </Card>
                            <Card.Body>
                                <Card.Header>Rylan Workman</Card.Header>
                                <Card.Text>
                                    you can be sure you're getting the best in quality and
                                    customer service. From custom designs to regular
                                    maintenance, I'm here to help. Once we're done, the
                                    site file is yours or I can host it for you, your choice. <a href="https://calendly.com/rylantech/web-requirements" target="_blank" className="FLink">Contact me</a> and let's get started on your website project!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <center>
                        <div id="scroll" className="scroll">
                            <div id="mouse" className="mouse">
                                <div id="mouse-wheel" className="mouse-wheel"></div>
                            </div>
                            <p id="scrollD" className="scrollD">
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
                                <Card.Header><a className="FLink" target="_blank" href="https://calendly.com/rylantech/web-requirements">Schedule a time to talk!</a></Card.Header>
                                <Card.Text>

                                    Get in Contact to discuss what you want for your website to get a better idea of the pricing and development timeline
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
                                    If you would like to find out more about this service, feel free to
                                    get in <Link to="/contact" className="FLink">contact</Link> with me!
                                    If you're looking for something specific, still feel free to ask!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
            <footer id="footer">
                <Container>
                    <Row>
                        <div className="col-6">
                            Rylan Workman<br />
                            RylanDeveloper@gmail.com
                        </div>
                        <div className="col-3 col-md-4 col-xl-5"></div>
                        <div className="col-3 col-md-2 col-xl-1">
                            <Link to="/contact" className="FLink">Contact</Link>
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