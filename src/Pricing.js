import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Pricing(props) {
    let cards = document.getElementsByClassName("PageCard");
    let cardText = document.getElementsByClassName("notUnderlined")

    useEffect(() => {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style = props.cardColor;
            if (cardText[i]) {
                cardText[i].style = props.textColor;
            }

        }
    });
    return (
        <div>
            <Container>
                <Row className="pricingPageRowOne">
                    <div className="slide-right col-12">
                        <p className="pricingFirstSlide">
                            Starting at $400
                        </p>
                    </div>
                </Row>
                <Row>
                    <Link to='/contact' className="notUnderlined">
                        <Card className="PageCard col-12 col-lg-12">
                            <Card.Body>
                                <Card.Header>
                                </Card.Header>
                                <Card.Text>
                                    Starting at $400
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Row>
            </Container>
            {/* <Container>
                <Row className="pricingPageRowOne">
                    <div class="slide-right col-12">
                        <p className="pricingFirstSlide">What do you want?</p>
                    </div>
                    <div className="choices">
                        <Row>
                            <div className="col-12 col-md-6">
                                <Link to='/basic' className="notUnderlined">
                                    <Card className="PageCard col-12 Pcard Pcard1">
                                        <Card.Body>
                                            <Card.Header>
                                                <h4 className="underlined">
                                                    Basic Site Plan
                                                </h4>
                                            </Card.Header>
                                            <Card.Text>
                                                Starting at $400, If you need to adver
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                            <div className="col-12 col-md-6">
                                <Link onClick={handleShow} className="notUnderlined">
                                    <Card className="PageCard col-12 Pcard">
                                        <Card.Body>
                                            <Card.Header>
                                                <h4 className="text-muted">Advanced Site Plan</h4>
                                                <Card.Subtitle>
                                                    This plan is currently not available
                                                </Card.Subtitle>
                                            </Card.Header>
                                            <Card.Text>
                                                Pricing varies depending on the reqirements. Also known as a full stack application, the Advanced Plan is
                                                the perfect choice for those who are looking for a more comprehensive solution. With this plan, you can
                                                take full advantage of our database and admin panel features, allowing you to easily manage your website's
                                                content and data. Our Advanced Plan also offers custom changes that you can apply with the admin panel,
                                                more time spent on development and more care of the project. With the Advanced Plan,
                                                you can create a website that is both visually stunning and highly functional. Examples of websites that
                                                have been created with the Advanced Plan include an online store, inventory management system, an
                                                e-learning platform and other creative ideas. Click the link above to find out more!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
            <>

                <Modal show={show} onHide={handleClose} className="model">
                    <Modal.Header closeButton>
                        <Modal.Title>Under construction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Currently, the Advanced Site Plan is not available. Sorry for the inconvenience.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </> */}
        </div>
    )
}
export default Pricing