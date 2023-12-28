import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap"

function Contact(props) {

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
        <div>
            <Container>
                <Row className="contactFirstPage">
                    <div className="contactFirstSlide">
                        <div className="slide-right">
                            <p className="contactSlideText">Get in touch!</p>
                        </div>
                    </div>
                </Row>
                <Row className="contactFirstRow">
                    <div className="col-12 col-md-6">
                        <Card className="PageCard col-12 contactCard">
                            <Card.Body>
                                <Card.Header>Email</Card.Header>
                                <br/>
                                <Card.Text><a className="contactLink" href="mailto:rylandeveloper@gmail.com">RylanDeveloper@gmail.com</a></Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card className="PageCard col-12 contactCard">
                            <Card.Body>
                                <Card.Header>Phone</Card.Header>
                                <br/>
                                <Card.Text>
                                    <a href="tel:8045843569" className="contactLink">{`(804)-584-3569`}</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card className="PageCard col-12 contactCard">
                            <Card.Body>
                                <Card.Header>Calendly (Schedule an Appointment)</Card.Header>
                                <br/>
                                <Card.Text>
                                    <a target="_blank" href="https://calendly.com/rylantech/web-requirements" className="contactLink">https://calendly.com/rylantech/web-requirements</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
export default Contact