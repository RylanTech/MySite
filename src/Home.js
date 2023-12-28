import { Outlet } from "react-router-dom"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";

function Home(props) {

    return (
        <div>
            <Navbar variant={props.theme} expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/"><h4>Home</h4></Link>
                            <Link className="nav-link" to="/portfolio"><h4>Portfolio</h4></Link>
                            <Link className="nav-link" to="/contact"><h4>Contact</h4></Link>
                            <Link className="nav-link" to="/about"><h4>About me</h4></Link>
                        </Nav>
                        <Button onClick={props.toggleTheme} variant={props.theme}>Theme</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}
export default Home