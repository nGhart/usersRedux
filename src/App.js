import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import UsersForm from './Components/UsersForm';
import Users from './Components/Users';

const App = () => {

  return (
    <>
      <Container>
        <Row>
          <Col
            xs={2}
          >
            <UsersForm />
          </Col>
          <Col
            xs={10}
          >
            <Users/>
          </Col>
        </Row>
      </Container>
    </>
  )

}

export default App

