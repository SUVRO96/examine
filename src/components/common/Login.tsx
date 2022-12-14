import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="row">
      <div className="col-6 bg-info bg-opacity-50">
        <h3>Examine</h3>
      </div>
      <div className="col-6 bg-info bg-opacity-50">
        <div className="text-right d-flex justify-content-end">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
      <div className="col-12 bg-warning bg-opacity-10">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
