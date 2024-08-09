import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile(props) {

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
                <Row>
                    <div className="col-lg-1" />
                    <h1 className="col-lg-11">Websites</h1>
                    <div className="col-lg-1" />
                    <div className="col-6 col-lg-5 edu">
                        <Card className="col-12 PageCard">
                            <Card.Body>
                                <Card.Img className="eduPhoto" src="/images/Meadowood3.png" />
                            </Card.Body>
                            <Card.Header>
                                <a className="profileLink" target="_blank" href="https://testnet.rylanworkman.com">Meadowood Church</a>
                            </Card.Header>
                        </Card>
                    </div>
                    <div className="col-6 col-lg-5 edu">
                        <Card className="col-12 PageCard">
                            <Card.Body>
                                <Card.Img className="eduPhoto" src="/images/yourqualitymassage.png" />
                            </Card.Body>
                            <Card.Header>
                                <a className="profileLink" target="_blank" href="https://yourqualitymassage.com">Your Quality Massage</a>
                            </Card.Header>
                        </Card>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-1" />
                    <div className="col-6 col-lg-5 edu">
                        <Card className="col-12 PageCard">
                            <Card.Body>
                                <Card.Img className="eduPhoto" src="/images/williscanada.png" />
                            </Card.Body>
                            <Card.Header>
                                <a className="profileLink" target="_blank" href="https://williscanada.com">Willis Canada</a>
                            </Card.Header>
                        </Card>
                    </div>
                    <div className="col-6 col-lg-5 edu">
                        <Card className="col-12 PageCard">
                            <Card.Body>
                                <Card.Img className="eduPhoto" src="/images/churchhiveweb.png" />
                            </Card.Body>
                            <Card.Header>
                                <a className="profileLink" target="_blank" href="https://churchhive.app">Church Hive Website</a>
                            </Card.Header>
                        </Card>
                    </div>
                </Row>
                <br /><br />
                <Row>
                    <div className="col-lg-1" />
                    <p className="col-lg-11">
                    <h1>Technical</h1>
                    <h4>Click to see technical details</h4>
                    </p>
                </Row>
                <Row>
                    <div className="col-lg-1" />
                    <div className="col-6 col-lg-5 edu">
                        <Card className="col-12 PageCard">
                            <Card.Body>
                                <Card.Img className="eduPhoto" src="/images/Rpass.png" />
                            </Card.Body>
                            <Card.Header>
                                <Link className="profileLink" to="/portfolio/rpass">Rpass</Link>
                            </Card.Header>
                        </Card>
                    </div>
                    <div className="col-6 col-lg-5 edu">
                        <Card className="col-12 PageCard">
                            <Card.Body>
                                <Card.Img className="eduPhoto" src="/images/church_hive_icon.svg" />
                            </Card.Body>
                            <Card.Header>
                                <Link className="profileLink" to="/portfolio/church_hive">Church Hive App</Link>
                            </Card.Header>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="AbtFtr" />
                </Row>
            </Container>
        </>
    )
}
export default Profile