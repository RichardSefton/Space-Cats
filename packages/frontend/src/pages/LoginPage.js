import axios from "axios";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toast Messages
  const handleError = () =>
    toast("👻 Error!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
    });
  const handleSuccess = () =>
    toast("🦄 Success!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
    });

  // Login
  const login = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setEmail(email);
    setPassword(password);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Login</h1>
          </Col>
          <Col>
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <img src="images/pink_astro_cat.jpg" alt="A Pink Astronaut Cat" />
          </Col>
          <Col>
            <p>
              Don't have an account? <Link to={"/signup"}>Signup</Link> /ᐠ.ꞈ.ᐟ\
            </p>
          </Col>
          <Col>
            <Form>
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
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                🐾Login
              </Button>
            </Form>
          </Col>
          <Col>
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
