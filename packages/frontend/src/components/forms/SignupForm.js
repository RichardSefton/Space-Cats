import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { messageConstants } from "../../constants/messageConstants";
import { signup } from "../../services/authentication-services/authenticationService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = () => {
  // NAVIGATE TO DASHBOARD
  const navigate = useNavigate();

  // STATES
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE SIGN UP FUNCTION
  const handleSignup = async () => {
    let response = await signup(username, email, password);
    if (response) {
      setMessage(messageConstants.SIGN_UP_SUCCESS);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setMessage(messageConstants.SIGN_UP_ERROR);
    }
    setUserName(username);
    setEmail(email);
    setPassword(password);
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSignup();
    if (username === "" || email === "" || password === "") {
      setMessage(messageConstants.SIGN_UP_ERROR);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="formBasicUserName"
                required
              >
                <Form.Label>Username: </Form.Label>
                <Form.Control
                  type="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              {/* SIGN UP BUTTON */}
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                🐾Sign Up
              </Button>
            </Form>
          </Col>
          <Col>
            {/* SIGN UP STATUS MESSAGE */}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupForm;
