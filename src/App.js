import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Header from 'components/Header';
import ProductList from 'components/ProductList';
import AmountDetail from 'components/AmountDetail';
import Promo from 'components/Promo';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Container className='mt-4'>
        <Row>
          <Col md={12} lg={8} className="mb-lg-0 mb-4">
            <ProductList />
          </Col>
          <Col md={12} lg={4} className="mb-lg-0 mb-5">
            <AmountDetail />

            <Promo />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
