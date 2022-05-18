import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import petStore from "../petStore";

const PetCreateModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [pet,setPet]= useState({
        name:props.pet.name,
        type:props.pet.type,
        image:props.pet.image,
        id:props.pet.id
    });

    const handleChange =(event=>{
        setPet({...pet,[event.target.name]:event.target.value,});
    });

    const handleSubmit = (event)=>{
        event.preventDefault()
        petStore.addPet(pet);
        handleClose();
    }

return(
<>
<button onclick={handleShow}>Add</button>
<Modal Show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>

<Form.Group className="mb-3" controlId="formBasicName">
<Form.Label>Pet Name</Form.Label>
<Form.Control onChange={handleChange} type="text" placeholder="Enter name" name="name" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Pet Type</Form.Label>
<Form.Control onChange={handleChange} type="text" placeholder="Pet type" name="type"/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Control onChange={handleChange} type="text" placeholder="Pet image url" name="image"/>
</Form.Group>

<Button onSubmit={handleSubmit} variant="secondary">Submit</Button>


</Form>
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={handleClose} variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal>
</>)
}

export default PetCreateModal;