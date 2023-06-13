import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { deleteUser } from '../slice/userSlice';
import { useDispatch } from 'react-redux';
import Edit from './Edit';

function SingleUser(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Card className="box" key={props.user.id}>
        <Card.Body>
          <Card.Title>Name: {props.user.name}</Card.Title>
          <Card.Text>Email: {props.user.email}</Card.Text>
          <Card.Text>Gen: {props.user.gen}</Card.Text>
          <div className="userModification">
            <Edit user={props.user} editUser={props.editUser} />
            <Button
              variant="primary"
              className="userButton"
              onClick={() => {
                dispatch(deleteUser(props.user.id));
              }}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleUser;
