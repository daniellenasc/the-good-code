import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="border-bottom">
      <Container>
        <Navbar.Brand
          href="https://www.linkedin.com/company/thegoodcode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="theGoodCode logo"
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQHNFxsI_cassw/company-logo_200_200/0/1644934901448?e=1677715200&v=beta&t=p_YJm3iaowZH_nVf4SgNnN7vh6ociwTcdQ8kl_uli9w"
            width="60"
            height="60"
            //className="d-inline-block align-top"
          />
          Dog Facts
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
