import {Navbar,Nav,Container} from "react-bootstrap"
const NavMovie = ()=>{
    return(
      // ********navbar*********
        <div className="navb">
                <Navbar className="Nav" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Moovie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Moovie</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
export default NavMovie