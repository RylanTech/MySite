import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";

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
                    <div className="col-lg-1"/>
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
                </Row>
                <Row>
                    <div className="AbtFtr"/>
                </Row>
            </Container>
        </>
    )
}
export default Profile