import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from "react-router";

class Header extends Component {
    render() {

        // see withRouter comment at the end of the file
        const { match } = this.props;

        return (
            <div style={ {marginBottom: "40px"} }>
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to={`${match.url}/view1`}>View 1</Nav.Link>
                    <Nav.Link as={Link} to={`${match.url}/view2`}>View 2</Nav.Link>                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

// withRouter is required to be able to receive the match object to the props
export default withRouter(Header);
