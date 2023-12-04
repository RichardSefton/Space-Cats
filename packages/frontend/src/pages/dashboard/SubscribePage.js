import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReturnToDashboardBreadcrumbs from "../../components/navigation/ReturnToDashboardBreadcrumbs";
import SubscribeForm from "../../components/forms/SubscribeForm";

const SubscribePage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <ReturnToDashboardBreadcrumbs></ReturnToDashboardBreadcrumbs>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                {/* PAGE TITLE */}
                <h3>Welcome To Our Internal Newsletter ᓚᘏᗢ</h3>
              </Card.Title>
              {/* MAIN CONTENT */}
              <Card.Text>
                If you want to keep in touch with any moderator-approved art or
                games, please sign up for our newsletter.
              </Card.Text>
              <Card.Text>
                You can subscribe using the email you signed up with or another
                one. It's up to you!
              </Card.Text>
              <Card.Text>
                <Link to="/unsubscribe">
                  Of course, you are welcome to unsubscribe at any time ♡🐾.
                </Link>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* SUBSCRIBE FORM TITLE */}
                  <h4>Subscribe To Our Internal Newsletter ᓚᘏᗢ</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* SUBSCRIBE FORM */}
            <SubscribeForm></SubscribeForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubscribePage;
