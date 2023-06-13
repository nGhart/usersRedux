import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../slice/userSlice';
import { Modal, Button } from 'react-bootstrap';

const Edit = (props) => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState({
    name: props.user.name,
    email: props.user.email,
    gen: props.user.gen,
    id: props.user.id,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    e.preventDefault();
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let updatedUser = {
      name: users.name,
      email: users.email,
      gen: users.gen,
      id: props.user.id,
    };
    dispatch(editUser({ id: props.user.id, updatedUser }));
    handleClose();
    console.log(updatedUser);
  };

  return (
    <>
      <Button variant="primary" className="userButton" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="editForm">
            <form onSubmit={handleEdit}>
              <div>
                <label>Name: </label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={users.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email: </label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={users.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Gen: </label>
                <br />
                <input
                  type="text"
                  name="gen"
                  value={users.gen}
                  onChange={handleChange}
                />
              </div>
              <button className="editButton">Save</button>
              <button className="editButton" onClick={handleClose}>
                Close
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Edit;
