import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser';

const Users = () => {
  const state = useSelector((state) => state.userReducer.users);
  return (
    <Container>
      <Row>
        <h1 className="users">Users</h1>
        <Col className="userDisplay" xs={12} sm={4}>
          {state.map((singleUser) => {
            return <SingleUser key={singleUser.id} user={singleUser} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};
export default Users;
