import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";

function Rpass(props) {

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
                    <h1>Rpass</h1>
                    <hr/>
                    <p>
                        Github: <a href="https://github.com/RylanTech/Local-Reactive-Pass">https://github.com/RylanTech/Local-Reactive-Pass</a> - Frontend & Backend
                    </p>
                    <div className="col-md-2" />
                    <Card className="PageCard col-12 col-md-8 youtube-video-card">
                        <Card.Body>
                            <Card.Header>What is Reactive Pass and how to deploy it</Card.Header>
                            <Card.Text>
                            <iframe className="col-12 youtube-video" src="https://www.youtube.com/embed/LIsWYkacBVE?si=-r6bqbm3Di_soDiB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="col-md-2" />
                    <h3>What is Rpass?</h3>
                    <p>
                        Rpass is a password manager that I initially created for myself to run on my local network for maximum security. However, I liked my work on it so much that I decided to publish it on <a target="_blank" href="https://reactivepass.com">https://reactivepass.com</a> and it is available for $8 a year. While having it on the WAN is convenient, it’s not as secure, so I recommend hosting it on a local network and accessing it through a VPN.
                    </p>  
                    <h3>What does the user experience?</h3>
                    <p>
                        Once the user creates an account with their name, email and password and the user log’s in, they are prompted to set up 2FA, although it isn’t a requirement to complete the setup. Then the user can create a “pass” to store their password information about their online account. All of the information they input is encrypted and saved. Once the user needs to access their pass, they input their master password, which is then unencrypted and delivered to them.
                    </p>
                    <Card className="PageCard col-12 youtube-video-card">
                        <Card.Body>
                            <Card.Header>"Pass" refers to the complete record of the encrypted account information</Card.Header>
                            <Card.Text>
                            <Card.Img className="eduPhoto" src="/images/rpass-account-functions.png" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <h3>The Database</h3>
                    <Card className="PageCard col-12 youtube-video-card">
                        <Card.Body>
                            <Card.Text>
                            <Card.Img className="eduPhoto" src="/images/rpass-db.png" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <h3>The Backend</h3>
                    <h3>The Frontend</h3>
                    
                </Row>
            </Container>
        </>
    )
}
export default Rpass