import { lazy, Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Aside from './components/Aside';

const Home = lazy(() => import('./pages/Home.jsx'));
const Compose = lazy(() => import('./pages/Compose.jsx'));
const SignIn = lazy(() => import('./pages/SignIn.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));
const Post = lazy(() => import('./pages/Post.jsx'));

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/compose" element={<Compose />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/tweet/:id" element={<Post />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
