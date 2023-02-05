import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pricing() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <Container>
                <Row className="pricingPageRowOne">
                    <div class="slide-right col-12">
                        <p className="pricingFirstSlide">What do you want?</p>
                    </div>
                    <div className="choices">
                        <Row>
                            <div className="col-12 col-md-6">
                                <Card className="PageCard col-12 Pcard Pcard1">
                                    <Card.Body>
                                        <Card.Header>
                                            <Link to="/basic" className="planHeading">
                                                <h4>
                                                    Basic Site Plan
                                                </h4>
                                            </Link>
                                        </Card.Header>
                                        <Card.Text>
                                        As low as $15 a month, If you're looking for a simple yet effective solution for your website, the Basic Site Plan 
                                        is just what you're looking for. This plan offers a wide range of front-end features, such as web page design,
                                         navigation, and content management, ensuring your website is visually appealing and easy to navigate. With 
                                         this Basic Plan, I can make you stunning websites that are sure to impress your visitors. Examples of 
                                         websites that can be created with the Basic Plan include a portfolio site or a site advertising your 
                                         business, project or product. Click the link above to find out more!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </div>
                                <div className="col-12 col-md-6">
                                <Card className="PageCard col-12 Pcard">
                                    <Card.Body>
                                        <Card.Header>
                                        <Button className="btn-link btnToLink" onClick={handleShow}>
                                            <h4 className="text-muted">Advanced Site Plan</h4>
                                        </Button>
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
        </>
        </div>
    )
}
export default Pricing