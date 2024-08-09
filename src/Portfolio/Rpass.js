import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

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
                    <h3>What is Rpass?</h3>
                    <p>
                        Rpass is a password manager that I intially created for myself to run on my local network for maximum secureity 
                    </p>
                    <h3>What does the user experience?</h3>
                    <h3>How does Rpass work?</h3>
                </Row>
            </Container>
        </>
    )
}
export default Rpass