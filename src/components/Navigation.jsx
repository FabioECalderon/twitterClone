import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styled from '@emotion/styled';

const NavLinkStyled = styled(Nav.Link)(({ theme }) => ({
  borderRadius: theme.borders.radius.pill,
  color: theme.colors['gray-900'],
  paddingRight: theme.spaces[4],
  '&:hover': {
    backgroundColor: theme.colors['gray-200'],
    color: theme.colors['gray-900'],
  },
}));

const IconStyled = styled('i')(({ theme }) => ({
  fontSize: theme.fonts[4],
  marginRight: theme.spaces[3],
}));

export default function Navigation() {
  const user = {};
  return (
    <nav className="mb-4">
      <Nav
        defaultActiveKey="/home"
        className="flex-column fs-5 gap-2 align-items-start"
      >
        <Nav.Link>
          <i className="bi bi-twitter fs-2"></i>
        </Nav.Link>
        <NavLinkStyled href="/home" active>
          <IconStyled className="bi bi-house-door-fill"></IconStyled>
          Home
        </NavLinkStyled>
        <NavLinkStyled href="/">
          <IconStyled className="bi bi-hash"></IconStyled>Explore
        </NavLinkStyled>
        {user && (
          <>
            <NavLinkStyled href="/">
              <IconStyled className="bi bi-bell"></IconStyled>
              Notifications
            </NavLinkStyled>
            <NavLinkStyled href="/">
              <IconStyled className="bi bi-envelope"></IconStyled>
              Messages
            </NavLinkStyled>
            <NavLinkStyled href="/">
              <IconStyled className="bi bi-card-list"></IconStyled>
              Lists
            </NavLinkStyled>
            <NavLinkStyled href="/" className="text-dark">
              <IconStyled className="bi bi-bookmark"></IconStyled>
              Bookmarks
            </NavLinkStyled>
            <NavLinkStyled href="/">
              <IconStyled className="bi bi-twitter"></IconStyled>
              Twitter Blue
            </NavLinkStyled>
            <NavLinkStyled href="/">
              <IconStyled className="bi bi-person"></IconStyled>
              Profile
            </NavLinkStyled>
          </>
        )}
      </Nav>
      <div className="d-flex">
        {user && (
          <Button className="rounded-pill flex-grow-1 mx-2 py-2 fs-5 text-white">
            Tweet
          </Button>
        )}
      </div>
    </nav>
  );
}
