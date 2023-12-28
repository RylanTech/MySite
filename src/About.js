import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";

function About(props) {

    let cards = document.getElementsByClassName("PageCard");
    let links = document.getElementsByClassName("contactLink");

    useEffect(() => {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style = props.cardColor;
            if (links[i]) {
                links[i].style = props.textColor;
            }
        }
    })

    return (
        <>
            <Container>
                <Row className="contactFirstPage">
                    <div className="contactFirstSlide col-12 col-lg-6">
                        <div className="slide-right">
                            <p className="contactSlideText">Rylan Workman</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <Card className="PageCard iCard">
                            <Card.Img src="images/me.jpg" />
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="col-lg-1" />
                    <Card className="PageCard col-12 col-lg-10 contactCard">
                        <Card.Body>
                            <Card.Header>Hello there!</Card.Header>
                            <Card.Text>
                                Over the past several years I have been pursuing my passion of Development and Information Technology. God has blessed me with the opportunity to make this a career. I’ve loved moving forward in facing new challenges and learning, I hope to continue this journey with tech.
                            </Card.Text>
                        </Card.Body>
                        <div className="links">
                        <a target="blank" href="https://www.linkedin.com/in/rylanworkman/">LinkedIn</a>
                        <a href="mailto:rylandeveloper@gmail.com">Email</a>
                        <a target="blank" href="https://github.com/RylanTech">Github</a>
                    </div>
                    </Card>
                    <div className="col-lg-1" />
                </Row>
                <Row>
                    <div className="col-lg-1"/>
                    <div className="col-6 col-lg-5 edu">
                        <Card className="col-12 PageCard">
                            <Card.Body>
                                <Card.Img className="eduPhoto" src="/images/Cert.png" />
                            </Card.Body>
                            <Card.Header>
                                Computer Science Certificate - Bethel College
                            </Card.Header>
                        </Card>
                    </div>
                    <div className="col-6 col-lg-5 edu">
                        <Card className="col-12 PageCard">
                            <Card.Body>
                                <Card.Img className="eduPhoto" src="/images/Aplus.png" />
                            </Card.Body>
                            <Card.Header>
                                Information Technology Certification - CompTIA A+
                            </Card.Header>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="AbtFtr"/>
                </Row>
            </Container>
        </>
    )
}
export default About