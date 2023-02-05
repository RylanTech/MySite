import { Outlet } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";

function Home() {
    document.body.style = 'background: black';
    return (
        <div>
            <Navbar className="navBr" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/"><h4>Home</h4></Link>
                        <Link className="nav-link" to="/pricing"><h4>Pricing</h4></Link>
                        <Link className="nav-link" to="/contact"><h4>Contact</h4></Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}
export default Home