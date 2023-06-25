import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Tweet from './components/Tweet';
import Create from './components/Create';
import Profile from './components/Profile';

function App() {
  const user = {};
  return (
    <Container className="container-fluid">
      <Row>
        <Col>
          <Navigation />
          {user && <Profile />}
        </Col>
        <Col md={6} className="border-start border-end">
          <h1 className="fs-5 my-2 fw-bolder">Home</h1>
          {user && <Create />}
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
