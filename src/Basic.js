import { useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Basic(props) {
    let cards = document.getElementsByClassName("PageCard");
    let pCards = document.getElementsByClassName("pricingOptionCard")

    useEffect(() => {
        for (let i = 0; i < pCards.length; i++) {
            pCards[i].style = props.cardColor;
            if (cards[i]) {
            cards[i].style = props.cardColor;
            }
        }
    });
    return (
        <div>
            <Container>
                <Row className="BasicFirstRow">
                    <div className="slide-right col-12">
                        <p className="BasicFirstSlide">Basic Site Plan</p>
                    </div>
                </Row>
                <Card className="PageCard BasicPageCard">
                    <Card.Body>
                        <Card.Header>
                            <h3>Services</h3>
                        </Card.Header>
                        <Card.Text>
                            <br/>
                            <h4>Website</h4>
                            <p>A fully developed website to meet your specifications. Websites with extra complexity may require additional 
                                charges. You may also use third party solutions integraded into your website.</p>
                            <h4>Hosting</h4>
                            <p>Your site will be set up and running on the internet safely and all the complexity will be taken out for you.</p>
                            <h4>Domain Name</h4>
                            <p>A domain name will be provided for you, some unique domains may end up costing money. You can also bring your
                            own domain if you already have one.</p>
                            <br/>
                            <h3>Options</h3>
                            <Row>
                                <div className="col-12 col-sm-6 col-xxl-3">
                                    <Card className="col-12 pricingOptionCard">
                                        <Card.Body>
                                            <Card.Header><h4>$15 per month for 12 months</h4></Card.Header>
                                            <Card.Text>
                                                <br/>
                                                <h4>Comes with</h4>
                                                <p>Free website</p>
                                                <p>Hosting & Domain</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3">
                                    <Card className="col-12 pricingOptionCard">
                                        <Card.Body>
                                            <Card.Header><h4>$16.50 per month for 6 months</h4></Card.Header>
                                            <Card.Text>
                                                <br/>
                                                <h4>Comes with</h4>
                                                <p>$40 website</p>
                                                <p>Hosting & Domain</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3">
                                    <Card className="col-12 pricingOptionCard">
                                        <Card.Body>
                                            <Card.Header><h4>$20 per month for 3 months</h4></Card.Header>
                                            <Card.Text>
                                                <br/>
                                                <h4>Comes with</h4>
                                                <p>$60 website</p>
                                                <p>Hosting & Domain</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3">
                                    <Card className="col-12 pricingOptionCard">
                                        <Card.Body>
                                            <Card.Header><h4>$25 per month</h4></Card.Header>
                                            <Card.Text>
                                                <br/>
                                                <h4>Comes with</h4>
                                                <p>$80 website</p>
                                                <p>Hosting & Domain</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-12 col-sm-6 col-xxl-3">
                                    <Card className="col-12 pricingOptionCard">
                                        <Card.Body>
                                            <Card.Header><h4>$90 Website</h4></Card.Header>
                                            <Card.Text>
                                                <br/>
                                                <p>If you would like to have just the site, I can do that as well.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                        </Card.Text>
                        <center>
                            <Link to="/contact">
                            <Button className="btn getInContactBtn" variant="outline-secondary" to="/contact"><h4>Get in contact!</h4></Button>
                            </Link>
                        </center>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default Basic