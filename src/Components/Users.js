import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Users = () => {
    const state = useSelector((state) => {
        return state.userReducer
    });
    console.log(state);
    return (
        <Container>
            <Row>
                <h1 className='users'>Users</h1>
                <Col className='userDisplay'>
                    {state.users.map((singleUser) => {
                        return (
                        <Card className='box' key={singleUser.id}>
                            <Card.Body>
                                <Card.Title>
                                    Name: {singleUser.name}
                                </Card.Title>
                                <Card.Text>
                                    Email: {singleUser.email}
                                </Card.Text>
                                <Card.Text>
                                    Gen: {singleUser.gen}
                                </Card.Text>
                                <div className='userModification'>
                                    <Button variant="primary" className='userButton' 
                                    // onClick={handleShow}
                                    >Edit</Button>
                                    <Button variant="primary" className='userButton' 
                                    // onClick={handleDelete}
                                    >Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}




export default Users;
