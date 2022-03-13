import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

const TopNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          出題吧！
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;