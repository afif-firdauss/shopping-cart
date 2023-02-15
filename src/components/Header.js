import React from 'react';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Container>
      <header className="d-flex justify-content-center p-3 bg-gray">
        <h1 className="fs-3 fw-bold">Shopping Cart</h1>
      </header>
    </Container>
  )
}

export default Header;