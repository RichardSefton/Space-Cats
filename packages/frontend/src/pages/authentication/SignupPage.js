import { Card, Col, Container, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../../components/navigation/home/HomeBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import SignupForm from "../../components/forms/authentication/SignupForm";

const SignupPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                {/* PAGE TITLE */}
                <h3>Register ᓚᘏᗢ</h3>
              </Card.Title>
            </Card.Body>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  {/* MAIN CONTENT */}
                  Already have an account?
                </Card.Text>
                <Card.Text>
                  <Link to={"/login"}>Login</Link> ♡🐾
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <Col>
            <Card.Body>
              <h4>Sign Up Here: ♫₊˚.🎧 ✩｡</h4>
              <Card.Title>
                {/* CAT IMAGE */}
                <LazyLoadImage
                  className="image"
                  src="images/cat_and_fish.jpg"
                  alt="A Cat and a Fish"
                />
              </Card.Title>
            </Card.Body>
          </Col>
          <Col>
            {/* SIGN UP FORM */}
            <SignupForm></SignupForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
