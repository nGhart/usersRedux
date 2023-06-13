import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import UsersForm from './Components/UsersForm';
import Users from './Components/Users';

const App = () => {
  return (
    <>
      <Container className="top">
        <Row>
          <Col sm={4} md={3}>
            <UsersForm />
          </Col>
          <Col>
            <Users />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
