import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { db } from '../../db';

const AddData = () => {
  const [name, setName] = useState('');
  const [stdClass, setStdClass] = useState('');
  const [status, setStatus] = useState('');

  async function addStudent(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    try {
      const id = await db.students.add({
        name,
        class: stdClass,
      });

      setStatus(`Student ${name} successfully added. Got id ${id}`);
      console.log(status);
      // setName('');
      // setAge(defaultAge);
    } catch (error) {
      setStatus(`Student to add ${name}: ${error}`);
    }
  }

  return (
    <Card style={{ width: '100%' }}>
      <Card.Title className="text-dark text-center mt-2">
        Add Student
      </Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              name="class"
              placeholder="Enter Class name"
              onChange={(e) => setStdClass(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => addStudent(e)}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddData;
