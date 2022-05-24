import { Nav, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Finance News</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/currencyconvertor">Currency Convertor</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default Navigation;
