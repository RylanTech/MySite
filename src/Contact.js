import { Card, Container, Row } from "react-bootstrap"

function Contact() {
    return (
        <div>
            <Container>
                <Row className="contactFirstPage">
                    <div className="contactFirstSlide">
                        <div class="slide-right">
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
                                <Card.Header>Discord</Card.Header>
                                <br/>
                                <Card.Text>
                                    RylanTech#3074
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